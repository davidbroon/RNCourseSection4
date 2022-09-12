import { StyleSheet, Text } from 'react-native';
import Colors from '../../util/color';

const InstructionText = ({ children, style }: any) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
};
export default InstructionText;
const styles = StyleSheet.create({
	instructionText: {
		color: Colors.accent500,
		fontSize: 24,
		fontFamily: 'open-sans'
	},
});
