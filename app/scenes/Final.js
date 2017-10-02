import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Import project components
import Input from '../components/Input';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import PrimaryButton from '../components/PrimaryButton';
import DisabledButton from '../components/DisabledButton';

export default class Final extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<Image
					style={{ width: 141, height: 141 }}
					source={require('../images/green-check.png')}
				/>
				<Text style={{ fontSize: 35, marginTop: 20, alignItems: 'center' }}>
					Your will is created successfully!
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	}
});
