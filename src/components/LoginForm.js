import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {View,Image,Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

class LoginForm extends Component{

    onEmailChange(text){
       this.props.emailChanged(text);
       console.log('on email change');
    }

    onPasswordChange(text){
        console.log('pass change');
        this.props.passwordChanged(text);
        console.log('on password change');
    }

    onLogin(){
       const {email, password} = this.props;
       this.props.loginUser({email,password});
       console.log('on login click');
    }

    renderButton(){
        if(this.props.loading){
           return <Spinner size="large" />
        }
        return(
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLogin.bind(this)}
            >
            <Text style={styles.buttonText}>
                Login
            </Text>
            </TouchableOpacity>

        )
    }

    render(){
        return(
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={styles.logoContainer}>
                  <Image
                      source={require('../../assets/start-logo.png')}
                      style={styles.logo}
                  />
                    <Text style={styles.title}>An Employee management app using react native </Text>

                </View>
                <View style={styles.formContainer}>
                <TextInput
                    placeholder={'user@gmail.com'}
                    style={styles.input}
                    onChangeText = {this.onEmailChange.bind(this)}
                    value = {this.props.email}
                    underlineColorAndroid={'transparent'}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                    <TextInput
                        secureTextEntry
                        placeholder={'Password'}
                        style={styles.input}
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                        underlineColorAndroid={'transparent'}
                    />

                <Text
                 style={styles.errorText}
                >{this.props.error}</Text>

                    {this.renderButton()}


                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = {
    container:{
      flex: 1,
      backgroundColor: '#3498db'
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,

    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} =auth
    return {
        email,
        password,
        error,
        loading
    }



};

export default connect(mapStateToProps,{emailChanged, passwordChanged, loginUser})(LoginForm)