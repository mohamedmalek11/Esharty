import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  container: Platform.select({
    android: {
      elevation: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 5,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: {width: 0, height: 5},
      padding: 5,
    },
  }),
});

export default styles;
