import React from 'react'
import {TextInput, Text, TouchableHighlight, Image} from 'react-native'
import ViewContainer from '../Components/ViewContainer'
import superagent from 'superagent'

export default class AddQuote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            by: 'by',
            quote: 'quote',
        };
    }

    addQuote() {
        superagent.post('http://localhost:1337/quotes')
            .send({
                quote: this.state.quote,
                by: this.state.by
            })
            .end((err, res) => {
                if (!err) {
                    this.props.navigator.pop();
                }
            })
    }

    render() {
        return(
            <ViewContainer>
                <Text>Add Quote: </Text>
                <Image source={{uri: 'https://emoji.slack-edge.com/T025KD60D/master/ed57e77df23a23a5.jpg'}} style={{width: 400, height: 400}} />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({by: text})}
                    value={this.state.by}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({quote: text})}
                    value={this.state.quote}
                />
                <TouchableHighlight underlayColor="white" onPress={() => this.addQuote()}>
                    <Text>Add quote</Text>
                </TouchableHighlight>
            </ViewContainer>
        )
    }
}
