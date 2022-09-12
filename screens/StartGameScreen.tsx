import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../util/color';

interface props {
	onPickNumber: (pickedNumber: number) => void;
}

const StartGameScreen = ({ onPickNumber }: props) => {
	const [enteredNumber, setEnteredNumber] = useState<string>('');

	const numberInputHandler = (enteredText: string) => {
		setEnteredNumber(enteredText);
	};

	const resetInputHandler = () => {
		setEnteredNumber('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99)
			return Alert.alert('Invalid Entry', 'Must Input Number between 1-99', [
				{ text: 'Okay', style: 'cancel', onPress: resetInputHandler },
			]);
		onPickNumber!(chosenNumber);
	};

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a Number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType='number-pad'
					autoCapitalize='none'
					autoComplete='off'
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={numberInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
				</View>
			</Card>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center',
	},
	numberInput: {
		height: 50,
		width: 100,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
		alignSelf: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
