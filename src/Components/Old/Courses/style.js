import {ScaledSheet} from 'react-native-size-matters';


const styles = ScaledSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: -15,
  },
  Image: {
    width: 414,
    height: 230,
  },
  TextWrapper: {
    position: 'absolute',
  },
  MainText: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 7,
    overflow: 'hidden',
    fontSize: '15@s',
    paddingHorizontal: '5@s',
    paddingVertical: 2,
    textAlign: 'right',
    margin: 5,
    marginBottom: 13,
  },
  Details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SeconeryText: {
    color: '#fff',
    fontSize: '13@s',
    paddingLeft: '40@s',
    paddingRight: '0@s',
    textAlign: 'right',
    margin: 6,
  },
  Button: {
    color: '#fff',
    fontSize: '13@s',
    textAlign: 'right',
    margin: 6,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 3,
    paddingVertical: 3,
  },
  LinearGradient: {
    borderRadius: 7,
    padding: 9,
    alignItems: 'flex-end',
    top: 106,
    left: 33,
  },
});

export default styles;
