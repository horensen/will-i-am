import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Card extends Component {
	render() {
		return (
			<View style={styles.containerStyle}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		alignSelf: 'stretch',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderRadius: 5,
		borderWidth: 0,
		borderColor: '#ddd',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: 0.25,
		shadowRadius: 20,
		paddingBottom: 10,
		margin: 20,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10
	}
});

export default Card;
