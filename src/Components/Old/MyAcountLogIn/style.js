import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
  MyAcountLogInContainer: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  MyAcountLogInWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: '5@vs',
  },
  MyAcountLogInImage: {
    width: '30@s',
    height: '37@s',
  },
  MyAcountLogInImageWrapper: {
    backgroundColor: Colors.yellow,
    borderRadius: '60@s',
    paddingHorizontal: '22@s',
    paddingVertical: '15@s',
    marginHorizontal: '15@s',
    marginVertical: '5@s',
    marginRight: '35@s',
  },
  MyAcountLogInTextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'flex-end',
    marginVertical: '10@vs',
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
});

export default styles;
