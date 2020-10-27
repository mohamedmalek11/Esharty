import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

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

  AccountSettingContainer: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  AccountSettingWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: '10@vs',
  },
  AccountSettingImage: {
    width: '30@s',
    height: '37@s',
  },
  AccountSettingImageWrapper: {
    backgroundColor: Colors.yellow,
    borderRadius: '60@s',
    paddingHorizontal: '20@s',
    paddingVertical: '15@s',
    marginHorizontal: '10@s',
    marginVertical: '5@s',
    marginRight: '20@s',
    maxHeight: '70@s',
  },
  AccountSettingTextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'center',
    marginVertical: '10@vs',
    marginLeft: '120@s',
  },
  AccountSettingAccDetailsText: {
    fontSize: '15@s',
    marginBottom: '10@s',
    textAlign: 'right',
  },
});

export default styles;
