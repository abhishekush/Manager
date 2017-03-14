import React, {Component} from 'react';
import {Picker, Text, TouchableOpacity} from 'react-native';
import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button, Input, Header} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate, employeeRefresh} from '../actions';
import {View} from 'react-native'

class EmployeeCreate extends Component{


    onCreate(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    componentWillUnmount(){
       this.props.employeeRefresh();
    }

    render(){
        return (
            <View style={styles.container}>
            <Header headerText="Create Employee"  back={true} />
            <Card>
                <EmployeeForm {...this.props} />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onCreate.bind(this)}
                >
                    <Text style={styles.buttonText}>
                        Create
                    </Text>
                </TouchableOpacity>


            </Card>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    },
    container: {
        backgroundColor: '#42b3ff',
        flex: 1
    },
    card: {
        backgroundColor: '#42b3ff',
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
}

const mapStateToProps = (state) =>{
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate, employeeRefresh})(EmployeeCreate);