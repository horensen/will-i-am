import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Import project components
import Input from '../components/Input';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import PrimaryButton from '../components/PrimaryButton';
import DisabledButton from '../components/DisabledButton';

export default class DisplayText extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ' '
		};
	}

	componentWillMount() {
		Object.assign(this.state, this.props.data);
	}

	render() {
		return (
			<ScrollView style={styles.containerStyle}>
				<Card>
					<CardSection>
						<Input
							label=""
							value={this.state.text}
							multiline={true}
							height={400}
						/>
					</CardSection>
				</Card>


				<View style={{ marginBottom: 100 }}>
					<PrimaryButton onPress={() => { Actions.finalScene(); }}>
						CONFIRM
					</PrimaryButton>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		padding: 20
	},
	listHeaderStyle: {
		fontSize: 12,
		fontFamily: 'Montserrat',
		marginTop: 30,
		marginLeft: 20,
		marginBottom: -10,
		color: '#666'
	}
});