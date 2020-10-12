import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width / 1.3;
const ImageHight = ImageWidth * 1.4;

const styles = ScaledSheet.create({
  Container: {
  },
  Image: {
    width: ImageWidth,
    height: ImageHight,
  },
  Image2: {
    width: ImageWidth,
    height: ImageHight,
    position: 'absolute',
    top: -1,
    left: 5,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    alignItems: 'flex-start',
  },
  TextWrapper: {
    position: 'absolute',
    alignItems: 'flex-start',
    top: 290,
    left: 25,
  },
  MainText: {
    color: '#fff',
    fontSize: '20@s',
    padding: '10@s',
    textAlign: 'right'
  },
  SeconeryText: {
    color: '#fff',
    fontSize: '15@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    textAlign: 'right'
  },
});

export default styles;
