import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import nextGuess from '../components/game/NextGuess';
import NumberContainer from '../components/game/NumberContainer';
import RandomNumberGenerator from '../components/game/RandomNumberGenerator';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../util/color';

interface props {
	userNumber: number;
	onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }: props) => {
	const initialGuess = RandomNumberGenerator(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	const nextGuessHandler = async (direction: string) => {
		let result = await nextGuess(
			direction,
			maxBoundary,
			minBoundary,
			currentGuess,
			userNumber,
		);

		if (!isNaN(result!.maxBoundary)) {
			maxBoundary = result!.maxBoundary;
		}
		if (!isNaN(result!.minBoundary)) {
			minBoundary = result!.minBoundary;
		}
		setCurrentGuess(result!.newRndNum);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
						<FontAwesome5 name='minus' size={15} color={'#fff'} />
					</PrimaryButton>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
						<FontAwesome5 name='plus' size={15} color={'#fff'} />
					</PrimaryButton>
				</View>
			</Card>
			<View>{/* Log rounds */}</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	buttonsContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		margin: 15,
	},
	instructionText: {
		marginBottom: 12,
	},
});
