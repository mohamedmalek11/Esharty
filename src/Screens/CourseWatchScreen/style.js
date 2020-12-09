import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
  backgroundVideo: {
    width: '320@s',
    height: '180@s',
    borderRadius: 7,
    position: 'relative',
    marginTop: '10@s',
  },
  VideoWrapper: {
    alignItems: 'center',
  },
  Details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5@s',
    direction: 'rtl',
  },
});

export default styles;
