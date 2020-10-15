import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
  backgroundVideo: {
    width: 375,
    height: 250,
    borderRadius: 7,
    position: 'relative',
    marginTop: 20,
  },
  VideoWrapper: {
    alignItems: 'center',
  },
  Details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
    direction: 'rtl',
  
  },
});

export default styles;
