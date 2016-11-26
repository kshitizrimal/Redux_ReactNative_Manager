import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth" initial>
				<Scene key="login" component={ LoginForm } title="Please Login"  />				
			</Scene>

			<Scene 
					key="main" 
					animation="fade" 
					navigationBarStyle={{ backgroundColor: '#ffff00'}}
					rightButtonTextStyle={{ color: '#000' }}
					leftButtonIconStyle={{ tintColor: '#000' }}
			>
				<Scene 
					onRight={ () => Actions.employeeCreate() }
					rightTitle="Add"
					key="employeeList" 
					component={ EmployeeList } 
					title="Employee List" 
					initial
				/>
				<Scene 
					navigationBarStyle={{ backgroundColor: '#00ffff'}} 
					animation="fade" 
					key="employeeCreate" 
					title="Create Employee" 
					component={ EmployeeCreate } 
				/>

				<Scene 
					navigationBarStyle={{ backgroundColor: '#ff00ff'}} 
					animation="fade" 
					key="employeeEdit" 
					title="Edit Employee" 
					component={ EmployeeEdit } 
				/>

			</Scene>
		</Router>
	);
};

export default RouterComponent;
