import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  TitleWrapper: {
    marginHorizontal: '25@s',
    marginTop: '30@s',
    marginBottom: '10@s',
  },

  Title: {
    textAlign: 'right',
    fontSize: '23@s',
  },
  Container: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  Wrapper: {
    alignItems: 'center',
  },
  Image: {
    width: '330@s',
    height: '230@s',
  },
  ImageWrapper: {
    marginTop: '-10@s',
  },
  ContentWrapper: {
    flexDirection: 'row',
    marginTop: '-15@s',
    direction: 'rtl',
    alignSelf: 'stretch',
    alignContent: 'flex-start',
  },
  TextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'flex-start',
    marginRight: '10@s',
    maxWidth: '220@s',
    width: '220@s',
  },
  MainTitle: {
    fontSize: '17@s',
    marginBottom: '7@s',
    textAlign: 'right',
    direction: 'ltr',
  },
  SecTitle: {
    color: '#222323',
    fontSize: '15@s',
    marginBottom: '10@s',
    textAlign: 'right',
    direction: 'ltr',
  },

  Icon: {
    fontSize: '25@s',
    backgroundColor: '#ED9F0B',
    color: '#fff',
    padding: '7@s',
    overflow: 'hidden',
    borderRadius: '21@s',
  },
  DescriptionWrapper: {
    padding: '10@s',
    marginHorizontal: '10@s',
    alignItems: 'flex-end',
  },
  Description: {
    color: '#222323',
    fontSize: '12@s',
    lineHeight: '20@s',
    textAlign: 'right',
    opacity: 0.5,
    direction: 'ltr',
  },
});

export default styles;
