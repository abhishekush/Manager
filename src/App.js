import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

export default class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDmK9tUwvoJERZQUj48AE0YVWLHAgnZer0",
            authDomain: "manager-935ce.firebaseapp.com",
            databaseURL: "https://manager-935ce.firebaseio.com",
            storageBucket: "manager-935ce.appspot.com",
            messagingSenderId: "297567364020"
        };
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <View>
                   <Text>Hello</Text>
                </View>
            </Provider>
        )
    }
}