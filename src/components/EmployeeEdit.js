import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Card, CardSection, Button, Confirm, Header} from './common';
import EmployeeForm from './EmployeeForm'
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeeUpdate, employeeSave, employeeDelete, employeeRefresh} from '../actions';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component{

    state = {showModal: false};

    componentWillMount(){

        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })

    }

    componentWillUnmount(){
        this.props.employeeRefresh();
    }

    buttonPress(){
        const {name, phone, shift} = this.props;
        console.log(name, phone, shift);
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});

    }

    onText(){
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept(){
      const {uid} = this.props.employee;
      this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal: false});
    }

    render(){
        return(
         <View style={styles.container}>
             <Header headerText="Employee Edit" back={true} />
         <View style={styles.card}>

            <Card style={styles.card}>
                <EmployeeForm/>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.buttonPress.bind(this)}
                >
                    <Text style={styles.buttonText}>
                        Save Changes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onText.bind(this)}
                >
                    <Text style={styles.buttonText}>
                        Text Schedule
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonContainer,{ marginBottom: 10}]}
                    onPress={()=>this.setState({showModal: !this.state.showModal})}
                >
                    <Text style={styles.buttonText}>
                        Fire
                    </Text>
                </TouchableOpacity>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>
         </View>
         </View>
        );
    }
}

const styles = {
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
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete, employeeRefresh})(EmployeeEdit);