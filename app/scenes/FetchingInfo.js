import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';

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
			rightValue1: ' ',
			rightValue2: ' ',
			rightValue3: ' ',
			rightValue4: ' ',
			rightValue5: ' ',
		};
	}

	componentDidMount() {
		this.startStopwatch1((counter) => {
			if (counter < 100) {
				this.setState({ rightValue1: 'Loading... ' + Math.round(counter) + '%' });
			} else {
				this.setState({ rightValue1: '$228,000' });
			}
			return counter < 100;
		}, 100);	// milliseconds

		this.startStopwatch2((counter) => {
			if (counter < 100) {
				this.setState({ rightValue2: 'Loading... ' + Math.round(counter) + '%' });
			} else {
				this.setState({ rightValue2: '$50,550' });
			}
			return counter < 100;
		}, 100);	// milliseconds

		this.startStopwatch3((counter) => {
			if (counter < 100) {
				this.setState({ rightValue3: 'Loading... ' + Math.round(counter) + '%' });
			} else {
				this.setState({ rightValue3: 'JOINT TENANCY' });
			}
			return counter < 100;
		}, 100);	// milliseconds

		this.startStopwatch4((counter) => {
			if (counter < 100) {
				this.setState({ rightValue4: 'Loading... ' + Math.round(counter) + '%' });
			} else {
				this.setState({ rightValue4: '$1,500,000' });
			}
			return counter < 100;
		}, 100);	// milliseconds

		this.startStopwatch5((counter) => {
			if (counter < 100) {
				this.setState({ rightValue5: 'Loading... ' + Math.round(counter) + '%' });
			} else {
				this.setState({ rightValue5: '$28,000,000' });
			}
			return counter < 100;
		}, 100);	// milliseconds
	}

	startStopwatch1(callback, interval) {
		let i = 0;
		const refreshIntervalId = setInterval(() => {
			i += Math.random() * (8 - 1) + 1;
			if (!callback(i)) {
				clearInterval(refreshIntervalId);
			}
		}, interval);
	}

	startStopwatch2(callback, interval) {
		let i = 0;
		const refreshIntervalId = setInterval(() => {
			i += Math.random() * (8 - 1) + 1;
			if (!callback(i)) {
				clearInterval(refreshIntervalId);
			}
		}, interval);
	}

	startStopwatch3(callback, interval) {
		let i = 0;
		const refreshIntervalId = setInterval(() => {
			i += Math.random() * (8 - 1) + 1;
			if (!callback(i)) {
				clearInterval(refreshIntervalId);
			}
		}, interval);
	}

	startStopwatch4(callback, interval) {
		let i = 0;
		const refreshIntervalId = setInterval(() => {
			i += Math.random() * (8 - 1) + 1;
			if (!callback(i)) {
				clearInterval(refreshIntervalId);
			}
		}, interval);
	}

	startStopwatch5(callback, interval) {
		let i = 0;
		const refreshIntervalId = setInterval(() => {
			i += Math.random() * (8 - 1) + 1;
			if (!callback(i)) {
				clearInterval(refreshIntervalId);
			}
		}, interval);
	}

	callback(counter) {
		return counter < 5;
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				{/*
				<Card>
					<CardSection>
						<Input
							label="CPF"
							placeholder=""
							value="$10,000"
							multiline={false}
							height={40}
							editable={false}
							disabledInputStyle={{ alignSelf: 'stretch', backgroundColor: 'transparent', color: 'red', height: 40, fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600', justifyContent: 'center', alignItems: 'center'}}
						/>

						<Input
							label="SAVINGS"
							placeholder=""
							value="$10,000"
							multiline={false}
							height={40}
							editable={false}
							disabledInputStyle={{ alignSelf: 'stretch', backgroundColor: 'transparent', color: 'green', height: 40, fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600', justifyContent: 'center', alignItems: 'center'}}
						/>
					</CardSection>
				</Card>
				*/}

				<Text style={styles.listHeaderStyle}>CENTRAL PROVIDENT FUND</Text>
				
				<List>
					<ListItem
						hideChevron
						key='listItem1'
						title='OA'
						titleStyle={{ fontFamily: 'Montserrat', fontSize: 15, width: 200 }}
						rightTitle={this.state.rightValue1}
						rightTitleStyle={{ color: '#6f43d4', fontSize: 20, fontFamily: 'Montserrat' }}
						onPress={() => { }}
						fontFamily='Montserrat'
						underlayColor='#eeeeee'
						containerStyle={{ backgroundColor: '#fff', height: 45 }}
					/>
					<ListItem
						hideChevron
						key='listItem2'
						title='SA'
						titleStyle={{ fontFamily: 'Montserrat', fontSize: 15, width: 200 }}
						rightTitle={this.state.rightValue2}
						rightTitleStyle={{ color: '#6f43d4', fontSize: 20, fontFamily: 'Montserrat' }}
						onPress={() => {}}
						fontFamily='Montserrat'
						underlayColor='#eeeeee'
						containerStyle={{ backgroundColor: '#fff', height: 45 }}
					/>
				</List>
				
				<Text style={styles.listHeaderStyle}>HDB</Text>
				
				<List>
					<ListItem
						hideChevron
						key='listItem3'
						title=''
						titleStyle={{ fontFamily: 'Montserrat', fontSize: 15, width: 200 }}
						rightTitle={this.state.rightValue3}
						rightTitleStyle={{ color: '#6f43d4', fontSize: 20, fontFamily: 'Montserrat' }}
						onPress={() => {}}
						fontFamily='Montserrat'
						underlayColor='#eeeeee'
						containerStyle={{ backgroundColor: '#fff', height: 45 }}
					/>
				</List>

				<Text style={styles.listHeaderStyle}>INSURANCE POLICIES</Text>

				<List>
					<ListItem
						hideChevron
						key='listItem4'
						title='NTUC Income'
						titleStyle={{ fontFamily: 'Montserrat', fontSize: 15, width: 200 }}
						rightTitle={this.state.rightValue4}
						rightTitleStyle={{ color: '#6f43d4', fontSize: 20, fontFamily: 'Montserrat' }}
						onPress={() => {}}
						fontFamily='Montserrat'
						underlayColor='#eeeeee'
						containerStyle={{ backgroundColor: '#fff', height: 45 }}
					/>
				</List>

				<Text style={styles.listHeaderStyle}>REAL ESTATE</Text>

				<List>
					<ListItem
						hideChevron
						key='listItem5'
						title='44 King Albert Road'
						titleStyle={{ fontFamily: 'Montserrat', fontSize: 15, width: 200 }}
						rightTitle={this.state.rightValue5}
						rightTitleStyle={{ color: '#6f43d4', fontSize: 20, fontFamily: 'Montserrat' }}
						onPress={() => {}}
						fontFamily='Montserrat'
						underlayColor='#eeeeee'
						containerStyle={{ backgroundColor: '#fff', height: 45 }}
					/>
				</List>

				<View style={{ margin: 20 }}>
					<PrimaryButton onPress={() => { Actions.beneficiariesScene(); }}>
						ALLOCATE ASSETS
					</PrimaryButton>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1
	},
	listHeaderStyle: {
		fontSize: 24,
		fontFamily: 'Montserrat',
		marginTop: 30,
		marginLeft: 20,
		marginBottom: -10,
		color: '#666'
	}
});
