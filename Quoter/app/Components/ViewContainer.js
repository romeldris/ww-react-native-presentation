import React from 'react'
import {View, StyleSheet} from 'react-native'

export default class ViewContainer extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
    }
});
