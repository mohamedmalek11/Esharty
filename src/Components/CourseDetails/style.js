import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';

const styles = ScaledSheet.create({
  Container: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  Image: {
    width: 400,
    height: 230,
  },
  ImageWrapper: {
    marginTop: '-10@s',
    alignItems: 'center',
  },
  ContentWrapper: {
    flexDirection: 'row',
    marginTop: '-10@s',
    justifyContent: 'space-between',
    direction: 'rtl',

    padding: '5@s',
    marginVertical: '5@vs',
    marginHorizontal: '5@s',
  },

  Title: {
    color: '#222323',
    fontSize: '15@s',
    direction: 'rtl',
  },
  DescriptionWrapper: {
    marginHorizontal: '5@s',
    alignItems: 'center',
    direction: 'rtl',
    marginBottom: '15@s',
  },
  Description: {
    direction: 'rtl',
    fontSize: 15,
    color: Colors.DarkGray,
    lineHeight: 25,
    textAlign: 'left',
  },
});

export default styles;
