import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
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
  ButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '10@vs'
  },
  UpdateButtonWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Dark,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    fontSize: '13@s',
    flexDirection: 'row',
    direction: 'rtl',
    alignItems: 'center',
  },
  CoursButtonWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Dark,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginHorizontal: 25,
    flexDirection: 'row',
    direction: 'rtl',
    alignItems: 'center',
  },
  Button: {
    fontSize: '13@s',
  },
});

export default styles;
