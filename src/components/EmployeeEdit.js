import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Button, Confirm, Header} from './common';
import EmployeeForm from './EmployeeForm'
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component{

    state = {showModal: false};

    componentWillMount(){

        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })

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
         <View>
             <Header headerText="Employee Edit" back={true} />

            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button
                      onPress={this.buttonPress.bind(this)}
                    >
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                        onPress={this.onText.bind(this)}
                    >
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={()=>this.setState({showModal: !this.state.showModal})}
                    >
                        Fire
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>
         </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);