import React from 'react'
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native'
import request from 'superagent'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    componentDidMount() {
        request.get('http://localhost:1337/quotes')
            .end((err, res) => {
                if (!err) {
                    this.setState({
                        number: res.body.quotes.length
                    });
                }
            })
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight underlayColor="white" onPress={()=>{this.props.navigator.push({name: 'QuoteList'})}}>
                    <Text style={styles.enterButton}>View</Text>
                </TouchableHighlight>
                <Text>There are {this.state.number} quotes</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    enterButton: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});
