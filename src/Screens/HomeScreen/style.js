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
      marginStart:10
  },
  iconWrapper: Platform.select({
    android: {
      elevation: 10,
      backgroundColor: '#fff',
      borderRadius: 50,
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
  Card: Platform.select({
    android: {
      elevation: 2,
      backgroundColor: '#fff',
      borderRadius: 7,
      padding: 5,
      margin: 5,
      width: 240,
      height: 313,
      marginBottom: 20,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 5},
      padding: 5,
      margin: 5,
      backgroundColor: null,
      width: 240,
      height: 320,
    },
  }),
  Image: {
    width: 270,
    height: 350,
    alignSelf: 'center',
    top: -15,
  },

  TextWrapper: {
    position: 'absolute',
    alignItems: 'flex-start',
    direction: 'rtl',
    top: 220,
    left: 10,
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
  LinearGradient: {
    borderRadius: 7,
    padding: 9,
    alignItems: 'center',
    width: 226,
    height: 305,
    direction: 'rtl',
    paddingTop: 10,
    position: 'absolute',
    left: 7,
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
    marginVertical: '10@vs',
    marginLeft: 95,
  },
});

export default styles;
