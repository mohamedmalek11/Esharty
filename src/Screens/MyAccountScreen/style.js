import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
  TitleWrapper: {
    alignItems: 'center',
    paddingTop: '10@s',
    marginBottom: '20@s',
  },
  Title: {
    fontSize: '15@s',
  },
  MyAcountLogInContainer: {
    padding: '5@s',
    marginVertical: '10@s',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  MyAcountLogInWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: '5@s',
  },
  MyAcountLogInImage: {
    width: '30@s',
    height: '37@s',
  },
  MyAcountLogInImageWrapper: {
    backgroundColor: Colors.yellow,
    borderRadius: '100@s',
    paddingHorizontal: '20@s',
    paddingVertical: '15@s',
    marginHorizontal: '15@s',
    marginVertical: '5@s',
    marginRight: '35@s',
  },
  MyAcountLogInTextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'flex-end',
    marginVertical: '10@s',
    marginLeft: '90@s',
  },
  MyAcountLogInGreetingText: {
    fontSize: '17@s',
    marginBottom: '10@s',
    textAlign: 'right',
  },
  MyAcountLogInLogInText: {
    color: '#fff',
    backgroundColor: Colors.yellow,
    textAlign: 'right',
    padding: '7@s',
    paddingHorizontal: '12@s',
    borderRadius: 5,
    overflow: 'hidden',
  },

  MyAccountAfterLogInContainer: {
    padding: '5@s',
    marginVertical: '10@s',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  MyAccountAfterLogInWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: '5@s',
  },
  MyAccountAfterLogInImage: {
    width: '30@s',
    height: '37@s',
  },
  MyAccountAfterLogInImageWrapper: {
    backgroundColor: Colors.yellow,
    borderRadius: '60@s',
    paddingHorizontal: '20@s',
    paddingVertical: '15@s',
    marginHorizontal: '10@s',
    marginVertical: '5@s',
    marginRight: '20@s',
    maxHeight: '70@s',
  },
  MyAccountAfterLogInTextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'center',
    marginVertical: '10@s',
    marginLeft: '120@s',
  },
  MyAccountAfterLogInAccDetailsText: {
    fontSize: '15@s',
    marginBottom: '10@s',
    textAlign: 'right',
  },
  MyAccountAfterLogInButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '10@s',
  },
  MyAccountAfterLogInUpdateButtonWrapper: {
    borderWidth: '0.8@s',
    borderRadius: 5,
    borderColor: Colors.Dark,
    paddingVertical: '8@s',
    paddingHorizontal: '20@s',
    marginHorizontal: '25@s',
    fontSize: '13@s',
    flexDirection: 'row',
    direction: 'rtl',
    alignItems: 'center',
  },
  MyAccountAfterLogInCoursButtonWrapper: {
    borderWidth: '0.8@s',
    borderRadius: 5,
    borderColor: Colors.Dark,
    paddingVertical: '8@s',
    paddingHorizontal: '30@s',
    marginHorizontal: '25@s',
    flexDirection: 'row',
    direction: 'rtl',
    alignItems: 'center',
  },
  MyAccountAfterLogInButton: {
    fontSize: '13@s',
  },

  DetailsCard: {
    padding: '5@s',
    marginVertical: '10@s',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  AccountDetailsWrapper: {
    padding: '10@s',
    marginBottom: '20@s',
  },
  DetailsWrapper: {
    flexDirection: 'row',
    marginVertical: '8@s',
    marginTop: '20@s',
    direction: 'rtl',
    justifyContent: 'space-between',
  },
  DetailsIcon: {
    fontSize: '15@s',
    marginRight: '15@s',
    color: Colors.Dark,
  },
  DetailsText: {
    fontSize: '13@s',
  },
  DetailsIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '20@vs',
    marginBottom: '30@vs',
  },
  ShareIconFacebook: {
    width: '7@s',
    height: '15@s',
  },
  ShareIconInsta: {
    width: '15@s',
    height: '15@s',
  },
  ShareIconTwitter: {
    width: '18@s',
    height: '15@s',
  },
  ShareIconWrapperFacebook: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: '10@s',
    paddingVertical: '6@s',
    borderRadius: '20@s',
    marginHorizontal: '6@s',
  },
  ShareIconWrapperInsta: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: '6@s',
    paddingVertical: '6@s',
    borderRadius: '20@s',
    marginHorizontal: '6@s',
  },
  ShareIconWrapperTwitter: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: '5@s',
    paddingVertical: '6@s',
    borderRadius: '20@s',
    marginHorizontal: '6@s',
  },
});

export default styles;
