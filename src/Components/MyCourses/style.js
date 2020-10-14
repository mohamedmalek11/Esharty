import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = 420;
const ImageHight = 250;

const styles = ScaledSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: '-30@vs',
  },
  Image: {
    width: ImageWidth,
    height: ImageHight,
  },

  MainText: {
    color: '#fff',
    backgroundColor: Colors.Dark,
    borderRadius: 7,
    overflow: 'hidden',
    fontSize: '15@s',
    paddingHorizontal: '5@s',
    paddingVertical: '2@vs',
    textAlign: 'right',
    margin: '5@s',
    marginBottom: '12@vs',
  },
  Details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
  },
  SeconeryText: {
    color: '#fff',
    fontSize: '13@s',
    textAlign: 'right',
    
  },
  Icon: {
    color: '#fff',
    fontSize: 17,
    padding: 3,
    backgroundColor: '#32a44d',
    borderRadius: 13,
    overflow: 'hidden',
    marginRight: 5
  },
  Button: {
    color: '#fff',
    fontSize: '13@s',
    textAlign: 'right',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: '3@s',
    paddingVertical: '2@s',
    marginHorizontal: 25,
  },
  TextWrapper: {
    position: 'absolute',
    alignSelf: 'center',
  },
  LinearGradient: {
    borderRadius: 7,
    padding: 9,
    alignItems: 'flex-start',
    top: 104,
    width: 362,
    height: 115,
    direction: 'rtl',
    paddingTop: 10,
  },
});

export default styles;
