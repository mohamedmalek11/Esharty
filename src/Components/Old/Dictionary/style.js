import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width / 1.2;
const ImageHight = ImageWidth / 1.3;

const styles = ScaledSheet.create({
  Container: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  Wrapper: {
    alignItems: 'center',
  },
  Image: {
    width: ImageWidth,
    height: ImageHight,
  },
  ImageWrapper: {
    marginTop: '-10@s',
  },
  ContentWrapper: {
    flexDirection: 'row',
    marginTop: '-10@s',
  },
  IconWrapper: {
    alignItems: 'flex-start',
    marginHorizontal: '10@s',
    marginLeft: '75@s',
  },
  Icon: {
    fontSize: '25@s',
    backgroundColor: '#ED9F0B',
    color: '#fff',
    padding: '7@s',
    overflow: 'hidden',
    borderRadius: '21@s',
  },
  TextWrapper: {
    marginHorizontal: '50@s',
    alignItems: 'flex-end',
    marginRight: '75@s',
  },
  MainTitle: {
    fontSize: '17@s',
    marginBottom: '10@s',
    textAlign: 'right',
  },
  SecTite: {
    color: '#222323',
    fontSize: '15@s',
    marginBottom: '10@s',
    textAlign: 'right',
  },
  DescriptionWrapper: {
    padding: '10@s',
    marginHorizontal: '10@s',
    alignItems: 'flex-end',
  },
  Description: {
    color: '#222323',
    fontSize: '12@s',
    lineHeight: 20,
    textAlign: 'right',
    opacity: 0.5,
  },
});

export default styles;
