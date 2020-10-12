import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: '5@vs',
  },
  BackIcon: {
    fontSize: '25@s',
    margin: '5@s',
  },
  HeaderTitleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderTitle: {
    margin: '5@s',
    fontSize: '15@s',
    marginLeft: '40@s',
  },
  LogInWrapper: {
    marginTop: '10@vs',
  },
  InputWrapper: {
    marginHorizontal: '30@s',
    flex: 1,
  },
  InputIcon: {
    fontSize: '20@s',
    marginRight: '15@s',
    color: '#9B9B9B',
    
  },
});

export default styles;
