import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Import project components
import Input from '../components/Input';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import PrimaryButton from '../components/PrimaryButton';
import DisabledButton from '../components/DisabledButton';

export default class SingPassLogin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nric: '',
			password: ''
		};
	}

	onNricChange(text) {
		this.setState({ nric: text });
	}

	onPasswordChange(text) {
		this.setState({ password: text });
	}

	componentDidMount() {
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<Image
					style={{ width: 125, height: 50 }}
					source={require('../images/singpass.png')}
				/>
				<Card>
					<CardSection>
						<Input
							label="NRIC"
							placeholder="enter NRIC"
							onChangeText={this.onNricChange.bind(this)}
							value={this.state.nric}
							multiline={false}
							height={40}
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry={true}
							label="SINGPASS"
							placeholder="enter singpass"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.state.password}
							multiline={false}
							height={40}
						/>
					</CardSection>
				</Card>

				<PrimaryButton onPress={() => { Actions.fetchingInfoScene(); }}>
					SIGN IN
				</PrimaryButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		padding: 20
	}
});
