import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class PrimaryButton extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.buttonStyle}
				disabled={true}
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
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
		marginTop: 10,
		marginBottom: 10
	},
	textStyle: {
		alignSelf: 'center',
		color: 'rgba(255, 255, 255, 0.4)',
		fontSize: 14,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Montserrat'
	}
});

