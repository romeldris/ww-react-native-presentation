import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class Quote extends React.Component {
    render() {
        var {
            by,
            quote
        } = this.props.quote;
        return(
            <View style={styles.quote}>
                <Text>{by}: {quote}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quote: {
        flex: 1,
        height: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
