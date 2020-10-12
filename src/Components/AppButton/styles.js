import {StyleSheet} from 'react-native';
import {Colors} from '../../Ulitis/Colors'

const buttonColor = Colors.yellow;
const textColor = 'white';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: buttonColor,
    borderColor: buttonColor,
    borderRadius: 7,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: textColor,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default styles;