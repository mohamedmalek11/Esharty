import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    paddingTop: '20@vs',
  },
  logo: {
    width: '160@s',
    height: '40@s',
  },
  icon: {
    fontSize: '15@s',
    backgroundColor: '#fff',
    padding: '10@s',
    overflow: 'hidden',
    borderRadius: 20,
  },
  FlatList: {
      direction: 'rtl',
  },
  iconWrapper: Platform.select({
    android: {
      elevation: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 4,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: {width: 2, height: 5},
      padding: 5,
    },
  }),
  greetingTextWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: '20@s',
    paddingTop: '10@vs',
  },
  greetingText: {
    fontSize: '19@s',
    fontWeight: '400',
  },
  topicsTextWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: '20@s',
    paddingBottom: '10@vs'
  },
  topicsText: {
    fontSize: '17@s',
    fontWeight: '400',
  },
});

export default styles;
