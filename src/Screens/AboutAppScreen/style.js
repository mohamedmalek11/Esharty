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
  HeaderTitle: {
    margin: '5@s',
    fontSize: '15@s',
    marginLeft: '40@s',
  },
  Image: {
    width: 192,
    height: 184,
  },
  ImageWrapper: {
    alignItems: 'center',
    marginTop: '30@vs',
  },
  AboutAppTextWrapper: {
    alignItems: 'flex-start',
    direction: 'rtl',
    paddingHorizontal: 50,
    paddingVertical: 40,
  },
  AboutAppText: {
    lineHeight: 30,
    fontSize: 16,
  },
});

export default styles;
