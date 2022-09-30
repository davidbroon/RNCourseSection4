import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../util/color';

interface Props {
	roundNumber: number;
	guess: number;
}

const GuessLogItem = ({ roundNumber, guess }: Props) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
		</View>
	);
};

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginVertical: 8,
		backgroundColor: Colors.accent500,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.25,
		shadowRadius: 5,
	},
	itemText: {
        fontFamily: 'open-sans',
        fontWeight: '800',
        fontSize: 18
        
	},
});
