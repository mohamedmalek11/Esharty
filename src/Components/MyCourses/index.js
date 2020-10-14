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
    <View style={styles.wrapper}>
      <Card>
        <Image
          source={require('../../Assets/Images/MuCourses.png')}
          style={styles.Image}
        />

        <View style={styles.TextWrapper}>
          <LinearGradient
            colors={[
              'rgba(255,255,255,0.0)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,0.5)',
            ]}
            style={styles.LinearGradient}>
            <View style={{paddingTop: 15}}>
              <Text style={styles.MainText}>{MyCourses.Title}</Text>
            </View>
            <View style={styles.Details}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={'checkmark-outline'} style={styles.Icon} />
                <Text style={styles.SeconeryText}>{Strings.FinishCourse}</Text>
              </View>

              <Text style={styles.Button}>{Strings.CheckCourse}</Text>
            </View>
          </LinearGradient>
        </View>
      </Card>
    </View>
  );
};
