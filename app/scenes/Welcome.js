import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Import project components
import PrimaryButton from '../components/PrimaryButton';

export default class Welcome extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<ImageBackground source={require('../images/welcome.jpg')} style={styles.backgroundImageStyle}>
				<StatusBar barStyle="dark-content" />

				<Image
					style={{ width: 211, height: 36, marginBottom: 30 }}
					source={require('../images/william-logo.png')}
				/>
				
				<View style={{ width: 300 }}>
					<PrimaryButton onPress={() => { Actions.singPassLoginScene(); }}>
						START A WILL
					</PrimaryButton>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImageStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -70
	},
	containerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	}
});
