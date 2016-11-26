import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, keyboard }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={ containerStyle } >
			<TextInput 
				autoCapitalize='none'
				keyboardType={keyboard} //"email-address"
				secureTextEntry={secureTextEntry}
				placeholder= {placeholder}
				autoCorrect={false}
				value={ value }
				onChangeText= { onChangeText }
				style={inputStyle}
			/>
		</View>
	);
};

const styles = { 
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };