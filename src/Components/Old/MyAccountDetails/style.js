import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
  DetailsCard: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  AccountDetailsWrapper: {
    padding: '10@s',
    marginBottom: '20@vs',
  },
  DetailsWrapper: {
    flexDirection: 'row',
    marginVertical: '8@vs',
    marginTop: '20@vs',
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
    marginBottom: '30@vs'
  },
  ShareIconFacebook: {
    width: 7,
    height: 15,
  },
  ShareIconInsta: {
    width: 15,
    height: 15,
  },
  ShareIconTwitter: {
    width: 18,
    height: 15,
  },
  ShareIconWrapperFacebook: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: '10@s',
    paddingVertical: '6@vs',
    borderRadius: 20,
    marginHorizontal: '6@s',
  },
  ShareIconWrapperInsta: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: '6@s',
    paddingVertical: '6@vs',
    borderRadius: 20,
    marginHorizontal: '6@s',
  },
  ShareIconWrapperTwitter: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: '5@s',
    paddingVertical: '6@vs',
    borderRadius: 20,
    marginHorizontal: '6@s',
  },
});

export default styles;
