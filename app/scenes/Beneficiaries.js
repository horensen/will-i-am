import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Slider } from 'react-native';
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
			percentage1: '50%',
			percentage2: '25%',
			percentage3: '25%'
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<ScrollView style={styles.containerStyle}>
				<Card>
					<CardSection>
						<Input
							label="BENEFICIARY 1"
							value="Cheng Ai Hoon"
							multiline={false}
							height={40}
							helpText={this.state.percentage1}
						/>
						<Slider
							value={50}
							maximumValue={100}
							onValueChange={(val) => { this.setState({ percentage1: Math.round(val) + '%' }); }}
						/>
					</CardSection>
				</Card>

				<Card>
					<CardSection>
						<Input
							label="BENEFICIARY 2"
							value="Cheng Zheng Kai Gerald"
							multiline={false}
							height={40}
							helpText={this.state.percentage2}
						/>
						<Slider
							value={25}
							maximumValue={100}
							onValueChange={(val) => { this.setState({ percentage2: Math.round(val) + '%' }); }}
						/>
					</CardSection>
				</Card>

				<Card>
					<CardSection>
						<Input
							label="BENEFICIARY 3"
							value="Cheng Zheng Tai John"
							multiline={false}
							height={40}
							helpText={this.state.percentage3}
						/>
						<Slider
							value={25}
							maximumValue={100}
							onValueChange={(val) => { this.setState({ percentage3: Math.round(val) + '%' }); }}
						/>
					</CardSection>
				</Card>

				<View style={{ marginBottom: 100 }}>
					<PrimaryButton onPress={() => { Actions.willGenerationScene(); }}>
						GENERATE WILL
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
