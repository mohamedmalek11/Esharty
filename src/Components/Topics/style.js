import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  Container: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Image: {
    width: '100@s',
    height: '100@s',
    
  },
  ImageWrapper: {},
  TextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'flex-end',
    marginVertical: '10@vs',
    marginLeft: '90@s'
  },
  MainText: {
      fontSize: '17@s',
      marginBottom: '10@s',
      textAlign: 'right'
  },
  Text: {
      color: '#676767',
      textAlign: 'right'
  },
});

export default styles;
