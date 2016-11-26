import React from 'react';
import { Modal, View, Text } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (
		<Modal
			visible={ visible }
			transparent
			animationType="slide"
			onRequestClose={ () => {} }
		>
			<View style={ containerStyle }>
				
				<CardSection style={ cardSectionStyle }>
					<Text style={ textStyle }>{ children }</Text>
				</CardSection>

				<CardSection style={ cardSectionStyle }>
					<Button onPress={ onAccept }>Yes</Button>
					<Button onPress={ onDecline }>No</Button>
				</CardSection>

			</View>
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(255,255,255,0.85)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };
