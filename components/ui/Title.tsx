import {Text, StyleSheet} from 'react-native'
import Colors from '../../util/color';

interface props{
    children: string;
}
const Title = ({children}:props) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: '#fff',
		textAlign: 'center',
		padding: 12,
		borderWidth: 2,
		borderColor: '#fff',
	},
});