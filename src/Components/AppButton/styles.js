import {StyleSheet} from 'react-native';

const buttonColor = '#ED9F0B';
const textColor = 'white';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: buttonColor,
    borderColor: buttonColor,
    borderRadius: 7,
    borderWidth: 1,
    padding: 15,
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