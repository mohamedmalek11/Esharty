import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {Strings} from '../../Ulitis/Strings';
import {Card} from '../Card';
import styles from './style';

export const MyCourses = (props) => {
  const {MyCourses} = props;

  return (
    <View style={styles.MyCourseswrapper}>
      <Card>
        <Image
          source={require('../../Assets/Images/MuCourses.png')}
          style={styles.MyCoursesImage}
        />

        <View style={styles.MyCoursesTextWrapper}>
          <LinearGradient
            colors={[
              'rgba(255,255,255,0.0)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,0.6)',
            ]}
            style={styles.MyCoursesLinearGradient}>
            <View style={{paddingTop: 15}}>
              <Text style={styles.MyCoursesMainText}>{MyCourses.Title}</Text>
            </View>
            <View style={styles.MyCoursesDetails}>
              {MyCourses.isCompleted && (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name={'checkmark-outline'}
                    style={styles.MyCoursesIcon}
                  />
                  <Text style={styles.MyCoursesSeconeryText}>
                    {Strings.FinishCourse}
                  </Text>
                </View>
              )}
              <Text style={styles.MyCoursesButton}>{Strings.CheckCourse}</Text>
            </View>
          </LinearGradient>
        </View>
      </Card>
    </View>
  );
};
