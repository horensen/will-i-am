import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class PrimaryButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pressStatus: false
		};
	}

	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={styles.buttonStyle}
				disabled={this.props.disabled}
			>
				<Text style={styles.textStyle}>
					{ this.props.children }
				</Text>
			</TouchableOpacity>
		);
	}
	
}

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: 'rgba(244, 64, 40, 1)',
		height: 50,
		justifyContent: 'center',
		alignSelf: 'stretch',	// a property type of flex box.
		borderRadius: 5,
		borderWidth: 0,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: 0.25,
		shadowRadius: 20,
		margin: 10
	},
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Montserrat'
	}
});

