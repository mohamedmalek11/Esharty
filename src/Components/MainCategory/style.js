import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  
  Card: Platform.select({
    android: {
      elevation: 2,
      backgroundColor: '#fff',
      borderRadius: 7,
      padding: 5,
      margin: 5,
      width: 240,
      height: 313,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 5},
      padding: 5,
      margin: 5,
      backgroundColor: null,
      width: 240,
      height: 350,
      
    },
  }),
  Image: {
    width: 270,
    height: 350,
    alignSelf: 'center',
    top: -15,
  },

  TextWrapper: {
    position: 'absolute',
    alignItems: 'flex-start',
    direction: 'rtl',
    top: 220,
    left: 10,
  },
  MainText: {
    color: '#fff',
    fontSize: '20@s',
    paddingHorizontal: '10@s',
    paddingBottom: '5@s',
    textAlign: 'right',
  },
  SeconeryText: {
    color: '#fff',
    fontSize: '15@s',
    paddingHorizontal: '10@s',
    textAlign: 'right',
  },
  LinearGradient: {
    borderRadius: 7,
    padding: 9,
    alignItems: 'center',
    width: 226,
    height: 305,
    direction: 'rtl',
    paddingTop: 10,
    position: 'absolute',
    left: 7,
  },
});

export default styles;
