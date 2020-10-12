import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: '10@vs',
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
  Image: {
    width: 110,
    height: 110,
  },
  ImageWrapper: {
    alignItems: 'center',
    marginTop: '30@vs',
  },
  InputWrapper: {
    marginHorizontal: '30@s',
    paddingTop: '10@vs',
  },
  InputIcon: {
    fontSize: '17@s',
    marginRight: '10@s',
    color: '#9B9B9B'
  },
});

export default styles;
