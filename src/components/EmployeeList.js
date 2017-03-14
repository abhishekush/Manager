import _ from 'lodash';
import React, {Component} from 'react';
import {Text, View, ListView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import {Header} from './common';
import {Actions} from 'react-native-router-flux';


class EmployeeList extends Component{

    componentWillMount(){
        console.log('list page');
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){

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
           <View style={styles.full}>
           <Header headerText="Employees"  />

           <ListView
               enableEmptySections
               dataSource={this.dataSource}
               renderRow={this.renderRow}

           />
               <View>
                   <TouchableHighlight style={styles.addButton}
                                       underlayColor='#1e3647' onPress={() => {Actions.employeeCreate()}}>
                       <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                   </TouchableHighlight>
               </View>
           </View>

        )
    }

}

const styles = {
    addButton: {
        backgroundColor: '#2e6082',
        borderColor: '#2b5470',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        bottom: 20,
        right: 20
    },
    full: {
        flex: 1,
        backgroundColor: '#3498db'
    }
}

const mapStateToProps = state => {
    console.log(state.employees);
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });
    return {employees};
}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);

