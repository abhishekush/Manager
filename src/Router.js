import React from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

import {Actions} from 'react-native-router-flux';

const RouterComponent = () => {

    return (
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
            <Scene key="auth" style={styles.login}>
              <Scene key="login" component={LoginForm} hideNavBar={true}  />
            </Scene>
            <Scene key="main" hideNavBar={true}>
              <Scene rightTitle="add" onRight={() => {Actions.employeeCreate()}} key="employeeList" component={EmployeeList} title="Employees" initial />
              <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
              <Scene key="employeeEdit" component={EmployeeEdit} title="Employee Details" />
            </Scene>
        </Router>
    )
};

const styles = StyleSheet.create({
    navBar: {
        // backgroundColor: 'red', // changing navbar color
    },
    navTitle: {
        // color: 'white', // changing navbar title color
    },
    routerScene: {
        //paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    },

});

export default RouterComponent;