import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class Input extends Component {
	render() {
		const { inputStyle, labelStyle, containerStyle, helpTextStyle, noHelpText } = styles;
		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{this.props.label}</Text>
				<TextInput
					enablesReturnKeyAutomatically
					secureTextEntry={this.props.secureTextEntry}
					placeholder={this.props.placeholder}
					autoCorrect={false}
					style={this.props.editable || this.props.editable === undefined ? inputStyle : this.props.disabledInputStyle}
					value={this.props.value}
					onChangeText={this.props.onChangeText}
					autoCapitalize='none'
					multiline={this.props.multiline}
					height={this.props.height}
					keyboardType={this.props.keyboardType || 'default'}
					keyboardAppearance={'default'}
					spellCheck={this.props.spellCheck}
					editable={this.props.editable}
				/>
				<Text style={this.props.helpText != null ? helpTextStyle : noHelpText}>
					{this.props.helpText}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'transparent',
		flexDirection: 'column',
		alignItems: 'center'
	},
	labelStyle: {
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		fontSize: 12,
		fontWeight: '400',
		fontFamily: 'Montserrat',
		justifyContent: 'center',
		alignItems: 'center',
		height: 15,
		color: '#3f3f3f',
		marginBottom: 0
	},
	inputStyle: {
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		color: '#000',
		height: 40,
		fontSize: 16,
		fontFamily: 'Montserrat',
		fontWeight: '600',
		justifyContent: 'center',
		alignItems: 'center'
	},
	disabledInputStyle: {
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		color: '#666',
		height: 40,
		fontSize: 16,
		fontFamily: 'Montserrat',
		fontWeight: '600',
		justifyContent: 'center',
		alignItems: 'center'
	},
	helpTextStyle: {
		alignSelf: 'stretch',
		color: '#777',
		fontFamily: 'Montserrat',
		fontWeight: '400'
	},
	noHelpText: {
		display: 'none'
	}
});

export default Input;
