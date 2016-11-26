import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ListItem from './ListItem';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {

	componentWillMount() {
		this.props.employeesFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	onEndPoint() {
		this.props.employeesFetch();
		console.log('fired ');
	}

	render() {
		return (
			<ListView 
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
				onEndReached={this.onEndPoint.bind(this)}
				onEndReachedThreshold={100}
			/>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return {...val, uid};
	});

	return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
