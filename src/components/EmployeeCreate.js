import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button, Input, Header} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {View} from 'react-native'

class EmployeeCreate extends Component{


    onCreate(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return (
            <View>
            <Header headerText="Create Employee"  back={true} />
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                        onPress={this.onCreate.bind(this)}
                    >Create</Button>
                </CardSection>
            </Card>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) =>{
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);