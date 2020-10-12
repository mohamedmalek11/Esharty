import {ScaledSheet} from 'react-native-size-matters';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width;
const ImageHight = ImageWidth / 1.8;

const styles = ScaledSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: '-15@vs'
  },
  Image: {
    width: ImageWidth,
    height: ImageHight,
  },
  TextWrapper: {
    position: 'absolute',
  
  },
  MainText: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 7,
    overflow: 'hidden',
    fontSize: '15@s',
    paddingHorizontal: '5@s',
    paddingVertical: '2@vs',
    textAlign: 'right',
    margin: '5@s',
    marginBottom: '10@vs',
  },
  Details: {
    flexDirection: 'row',
  },
  SeconeryText: {
    color: '#fff',
    fontSize: '13@s',
    paddingLeft: '40@s',
    paddingRight: '0@s',
    textAlign: 'right',
    margin: '5@s',
  },
  Button: {
    color: '#fff',
    fontSize: '13@s',

    textAlign: 'right',
    margin: '5@s',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: '3@s',
    paddingVertical: '2@s',
  },
  LinearGradient: {
  borderRadius: 7,
  padding: 9,
  alignItems: 'flex-end',
  top: 104,
  left: 33,
  
  },
});

export default styles;
