import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import Home from './app/Containers/Home'
import QuoteList from './app/Containers/QuoteList'
import AddQuote from './app/Containers/AddQuote'

class Quoter extends Component {
    _renderScene(route, navigator) {
        switch(route.name) {
            case 'Home':
                return <Home navigator={navigator}/>
            case 'QuoteList':
                return <QuoteList navigator={navigator} />
            case 'AddQuote':
                return <AddQuote navigator={navigator} />
        }
    }

    render() {
        return(
            <Navigator
                initialRoute={{name: 'Home'}}
                renderScene={(route, navigator) => {return this._renderScene(route, navigator)}}
            />
        )
    }
}

AppRegistry.registerComponent('Quoter', () => Quoter);
