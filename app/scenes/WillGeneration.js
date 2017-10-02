import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Import project components
import Input from '../components/Input';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import PrimaryButton from '../components/PrimaryButton';
import DisabledButton from '../components/DisabledButton';

export default class WillGeneration extends Component {

	constructor(props) {
		super(props);
		this.state = {
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
							label="Will of CHEN BEE HONG"
							value={template}
							multiline={true}
							height={400}
						/>
					</CardSection>
				</Card>


				<View style={{ marginBottom: 100 }}>
					<PrimaryButton onPress={() => { Actions.attachDocumentsScene(); }}>
						ATTACH DOCUMENT
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

const template = "Revision no. 38347382472\n\n I, CHEN BEE HONG, holder of Singapore Pink Identity Card No. XXXXXXX of 5 Greenacre Grove, Singapore 123987, do HEREBY REVOKE all former wills made by me and DECLARE this to be my last will. \n\n I appoint my husband, DONALD CHEN, holder of Singapore Pink Identity Card No. XXXXXXX also of 5 Greenacre Grove, Singapore 123987 and my only sister, CHEN HONG BEE, holder of Singapore Pink Identity Card No. XXXXXXX, of 9 Browntrump Avenue, Singapore 987123 to be my executor and executrix and trustees of this will (“my Trustees”) and I declare that the expression “my Trustees” in this will shall where the context permits include the trustee or trustees for the time being of this will whether original or substituted.\n\nSubject to the payment of or provision for my funeral and testamentary expenses, debts and all estate duty and tax payable, I give my property movable and immovable of whatever nature and wherever situated to my Trustees upon trust to stand possessed of said property (“my estate”):\n\n To sell the shop house at 9B Kitchenware Road, Singapore 100200 with the proceeds to be distributed as follows:\n\nHalf the proceeds to be distributed to my only sister, the said CHEN HONG BEE; and]n]nHalf the proceeds to be held on trust for my three children, A, B and C (\“my children\”), in equal shares until they reach the age of 25. Should any of my children die before reaching the age of 25, their share will be given to my husband.\n\nThe monies in my DBS bank account (No. 12-8888-2088) are to be distributed as follows:\n\nSingapore Dollars Fifty Thousand (S$50,000) to be given to my husband; and Singapore Dollars Twenty-Five Thousand (S$25,000) to be given to each of my children. \n\n The remainder of my estate is to be given to my husband, the said DONALD CHEN. \n\nI appoint my only sister, the said CHEN HONG BEE to be the guardian of such of my children while he or she is an infant if: \n\nMy husband predeceases me; or \n My husband does not survive me by a period of more than thirty (30) days. \n\nIN WITNESS THEREOF I have hereunto set my hand this day of 2017. \n\n Signed by the abovenamed	) \n\n CHEN BEE HONG in our presence	) \n\n and by us in his:- \n\n [2 WITNESSES] )";