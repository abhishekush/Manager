import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux'
export default class ListItem extends Component{

    onRowPress(){
        console.log('listitem clicked');
        Actions.employeeEdit({employee: this.props.employee});
    }

    render(){
        const {name} = this.props.employee;
        return(
            <TouchableOpacity
                onPress={this.onRowPress.bind(this)}
            >
            <CardSection>
             <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>
            </TouchableOpacity>
        )
    }
}

const styles = {
   titleStyle:{
       fontSize: 18,
       paddingLeft: 15
   }
}