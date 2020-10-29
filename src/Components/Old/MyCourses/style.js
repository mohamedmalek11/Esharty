import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');



const styles = ScaledSheet.create({
  MyCourseswrapper: {
    alignItems: 'center',
    marginBottom: '-30@vs',
  },
  MyCoursesImage: {
    width: 420,
    height: 250,
  },

  MyCoursesMainText: {
    color: '#fff',
    backgroundColor: Colors.Dark,
    borderRadius: 7,
    overflow: 'hidden',
    fontSize: '15@s',
    paddingHorizontal: '5@s',
    paddingVertical: '2@vs',
    textAlign: 'right',
    margin: '5@s',
    marginBottom: '12@vs',
  },
  MyCoursesDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    justifyContent: 'flex-end',
  },
  MyCoursesSeconeryText: {
    color: '#fff',
    fontSize: '13@s',
    textAlign: 'right',
    
  },
  MyCoursesIcon: {
    color: '#fff',
    fontSize: 17,
    padding: 3,
    backgroundColor: '#32a44d',
    borderRadius: 13,
    overflow: 'hidden',
    marginRight: 5
  },
  MyCoursesButton: {
    color: '#fff',
    fontSize: '13@s',
    textAlign: 'right',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: '3@s',
    paddingVertical: '2@s',
    marginHorizontal: 25,
    alignSelf: 'flex-end',
  },
  MyCoursesTextWrapper: {
    position: 'absolute',
    alignSelf: 'center',
  },
  MyCoursesLinearGradient: {
    borderRadius: 7,
    padding: 9,
    alignItems: 'flex-start',
    top: 104,
    width: 362,
    height: 115,
    direction: 'rtl',
    paddingTop: 10,
  },
});

export default styles;
