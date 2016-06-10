import React from 'react'
import {ListView, View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import ViewContainer from '../Components/ViewContainer'
import Quote from '../Components/Quote'
import superagent from 'superagent'

export default class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds: dataSource.cloneWithRows([]),
        };
    }

    componentDidMount() {
        superagent.get('http://localhost:1337/quotes')
            .end((err, res) => {
                console.log(res);
                if (!err) {
                    this.setState({
                        ds: this.state.ds.cloneWithRows(res.body.quotes)
                    });
                }
            })
    }

    render() {
        return(
            <ViewContainer style={styles.container}>
                <Text>Quotes:</Text>
                <TouchableHighlight underlayColor="white" onPress={() => {this.props.navigator.push({name: 'AddQuote'})}}>
                    <Text style={styles.addButton}>Add+</Text>
                </TouchableHighlight>
                <ListView dataSource={this.state.ds}
                    renderRow={
                        (rowData) => <Quote quote={rowData}/>
                    }
                />
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        flex: 1,
    },
    addButton: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
