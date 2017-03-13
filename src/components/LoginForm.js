import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {View,Image,Text, TextInput} from 'react-native';

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
            <Button onPress={this.onLogin.bind(this)}>
                Login
            </Button>
        )
    }

    render(){
        return(
            <View style={styles.container}>
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
                />
                    <TextInput
                        secureTextEntry
                        placeholder={'password'}
                        style={styles.input}
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                        underlineColorAndroid={'transparent'}
                    />

                <Text
                 style={styles.errorText}
                >{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

                </View>
            </View>
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
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,

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