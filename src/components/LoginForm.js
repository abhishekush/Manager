import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Text} from 'react-native';

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
            <Card>
                <CardSection>
                    <Input
                        label = "Email"
                        placeholder = "email@gmail.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label = "Password"
                        placeholder = "Password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>
                <Text
                 style={styles.errorText}
                >{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
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