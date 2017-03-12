import _ from 'lodash';
import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component{

    componentWillMount(){
        console.log('list page');
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){
        console.log('list component receive props !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){
        ds = new ListView.DataSource({
            rowHasChanged:(ri, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />
    }

    render(){
        console.log(this.props.employees);

        return(
           <ListView
               enableEmptySections
               dataSource={this.dataSource}
               renderRow={this.renderRow}
           />
        )
    }

}

const mapStateToProps = state => {
    console.log('~~~~~~~~~~~~~~~~~');
    console.log(state.employees);
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });
    return {employees};
}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);

