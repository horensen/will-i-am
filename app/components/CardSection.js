import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class CardSection extends Component {
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
		backgroundColor: 'transparent',
		borderWidth: 0,
		borderColor: '#ddd',
		padding: 20,
		paddingBottom: 0,
		justifyContent: 'flex-start',
		flexDirection: 'column'
	}
});

export default CardSection;
