import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width;
const ImageHight = ImageWidth / 1.8;

const styles = ScaledSheet.create({
  TitleWrapper: {
    marginHorizontal: '25@s',
    marginTop: '10@s',
    marginBottom: '5@s',
  },

  Title: {
    textAlign: 'right',
    fontSize: '20@s',
  },
  MainText: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 7,
    overflow: 'hidden',
    fontSize: '13@s',
    paddingHorizontal: '5@s',
    paddingVertical: '2@s',
    textAlign: 'right',
    margin: '5@s',
    marginBottom: '13@s',
  },
  Details: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  SeconeryText: {
    color: '#fff',
    fontSize: '13@s',
    paddingLeft: '35@s',
    paddingRight: '0@s',
    textAlign: 'right',
    margin: '5@s',
  },
  Button: {
    color: '#fff',
    fontSize: '12@s',
    textAlign: 'right',
    margin: '5@s',
    borderRadius: '5@s',
    borderColor: '#fff',
    borderWidth: '1@s',
    paddingHorizontal: '3@s',
    paddingVertical: '3@s',
  },
  LinearGradient: {
    borderRadius: '7@s',
    zIndex: 2,
    position: 'absolute',
    top: '-17@s',
    left: '32@s',
    width: '286@s',
    height: '190@s',
  },
  TextWrapper: {
    position: 'absolute',
    alignItems: 'flex-end',
    zIndex: 3,
    top: '97@s',
  },
  Image: {
    width: '300@s',
    height: '200@s',
  },
  Card: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '-15@s',
    
  },
});

export default styles;
