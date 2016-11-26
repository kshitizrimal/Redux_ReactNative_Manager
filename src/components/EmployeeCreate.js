import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';

import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

	componentDidMount() {
		this.props.employeeUpdate({ prop: 'name', value: '' });
		this.props.employeeUpdate({ prop: 'phone', value: '' });
		this.props.employeeUpdate({ prop: 'shift', value: 'Monday' });
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift});
	}

	render() {
		console.log(this.props.employee);
		return (
			<Card>
				<EmployeeForm { ...this.props } />
				<CardSection>
					<Button onPress={ this.onButtonPress.bind(this) } >Create</Button>
				</CardSection>	
							
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
