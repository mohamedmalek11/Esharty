import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    paddingTop: '20@s',
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
    borderRadius: '20@s',
  },
  FlatList: {
    direction: 'rtl',
    marginStart: '10@s',
  },
  iconWrapper: Platform.select({
    android: {
      elevation: 10,
      backgroundColor: '#fff',
      borderRadius: '50@s',
      padding: '4',
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
    paddingTop: '10@s',
  },
  greetingText: {
    fontSize: '19@s',
    fontWeight: '400',
  },
  topicsTextWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: '20@s',
    paddingBottom: '10@s',
  },
  topicsText: {
    fontSize: '17@s',
    fontWeight: '400',
  },
  Card: Platform.select({
    android: {
      elevation: 2,
      backgroundColor: '#fff',
      borderRadius: '7@s',
      padding: '5@s',
      margin: '5@s',
      width: '350@s',
      height: '313@s',
      marginBottom: '20@s',
      marginHorizontal: '10@s',
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: '5@s',
      shadowOffset: {width: 0, height: 5},
      padding: '5@s',
      margin: '5@s',
      width: '300@s',
      height: '200@s',
      marginHorizontal: '10@s',
    },
  }),
  Image: {
    width: '300@s',
    height: '200@s',
    alignSelf: 'center',
    top: '-15@s',
    borderRadius: '6@s',
  },

  TextWrapper: {
    position: 'absolute',
    alignItems: 'flex-start',
    direction: 'rtl',
    top: '220@s',
    left: '10@s',
  },
  MainCategoryText: {
    color: '#fff',
    fontSize: '20@s',
    paddingHorizontal: '10@s',
    paddingBottom: '5@s',
    textAlign: 'right',
  },
  CategorySeconeryText: {
    color: '#fff',
    fontSize: '15@s',
    paddingHorizontal: '10@s',
    textAlign: 'right',
  },
  TopicsContainer: {
    padding: '5@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '7@s',
  },
  TopicsTextWrapper: {
    marginHorizontal: '15@s',
    alignItems: 'flex-end',
    marginVertical: '10@s',
    marginLeft: '95@s',
  },
});

export default styles;
