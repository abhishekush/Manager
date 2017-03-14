import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {Card, CardSection, Button, Input} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component{
    render(){
        return(
              <View style={styles.formContainer}>
                <CardSection style={styles.section}>
                    <Input
                        style={styles.login}
                        label="Name"
                        placeholder="Jay Prakash"
                        value={this.props.name}
                        onChangeText = {text => this.props.employeeUpdate({prop: 'name', value: text})}
                    />
                </CardSection>
                <CardSection style={styles.section}>
                    <Input
                        label="Phone No."
                        placeholder="-987-456-123"
                        value={this.props.phone}
                        onChangeText = {text => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>
                <CardSection style={styles.section}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{flex:1,color: 'white'}}
                        selectedValue={this.props.shift}
                        onValueChange={(day) => {this.props.employeeUpdate({prop: 'shift', value: day}); console.log(this.props.shift);}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
              </View>
        )
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20,
        color: '#fff'
    },
    formContainer: {
        backgroundColor: '#42b3ff'
    },
    section: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
        opacity: 1

    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};

}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);

