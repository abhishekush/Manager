import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux'
export default class ListItem extends Component{

    onRowPress(){
        console.log('listitem clicked');
        Actions.employeeEdit({employee: this.props.employee});
    }

    toTitleCase(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    render(){

        let {name} = this.props.employee;
        name = this.toTitleCase(name);

        return(
            <TouchableOpacity
                onPress={this.onRowPress.bind(this)}
            >
            <CardSection style={styles.section}>
             <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>
            </TouchableOpacity>
        )
    }
}

const styles = {
   titleStyle:{
       fontSize: 18,
       paddingLeft: 15,
       color: '#ffffff',
       opacity: 0.8

   },

   section: {
       backgroundColor:'rgba(255, 255, 255, 0.2)'
   }
}