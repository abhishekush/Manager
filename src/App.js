import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>

                  <LoginForm/>

            </Provider>
        )
    }
}