import React from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
            <Scene key="auth">
              <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main">
              <Scene rightTitle="add" onRight={() => {console.log("Right!")}} key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    )
}

const styles = StyleSheet.create({
    navBar: {
        // backgroundColor: 'red', // changing navbar color
    },
    navTitle: {
        // color: 'white', // changing navbar title color
    },
    routerScene: {
        paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    },
});

export default RouterComponent;