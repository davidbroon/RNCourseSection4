import { Alert } from 'react-native';
import RandomNumberGenerator from './RandomNumberGenerator';

const nextGuess = (
	direction: string,
	maxBoundary: number,
	minBoundary: number,
	currentGuess: number,
	userNumber: number,
) => {
	if (
		(direction === 'lower' && currentGuess < userNumber) ||
		(direction === 'greater' && currentGuess > userNumber)
	) {
		Alert.alert("Don't Lie", 'You know that this is wrong...', [
			{ text: 'Sorry!', style: 'cancel' },
		]);
		return;
	}
	if (direction === 'lower') {
		maxBoundary = currentGuess;
	} else {
		minBoundary = currentGuess;
	}
	const newrndNum = RandomNumberGenerator(
		minBoundary,
		maxBoundary,
		currentGuess,
	);
	//setCurrentGuess(newrndNum);
	return {
		maxBoundary: maxBoundary,
		minBoundary: minBoundary,
		newRndNum: newrndNum,
	};
};

export default nextGuess;
