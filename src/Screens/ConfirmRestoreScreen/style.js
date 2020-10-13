import {ScaledSheet} from 'react-native-size-matters';


const styles = ScaledSheet.create({
  
  
  Header: {
    alignItems: 'center',
  },
  HeaderTitle: {
    margin: '5@s',
    fontSize: '15@s',
  },
  InputWrapper: {
    marginHorizontal: '30@s',
    marginTop: '30@vs',
  },
  InputIcon: {
    fontSize: '17@s',
    marginRight: '10@s',
    color: '#9B9B9B'
  },
  IconWrapper: {
    alignItems: 'flex-start',
    borderRadius: 20,
    
  },
  Icon: {
    fontSize: 30,
    padding:5,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden'
  },
});

export default styles;
