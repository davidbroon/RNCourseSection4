import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../util/color';

const PrimaryButton = ({ children, onPress }: any) => {
	
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};
export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		margin: 4,
		borderRadius: 28,
        overflow: 'hidden',
        width:'40%'
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
