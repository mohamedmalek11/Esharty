import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {AppButton} from '../../Components/AppButton';
import {placeholder, Strings} from '../../Ulitis/Strings';
import Icon from 'react-native-vector-icons/Ionicons';
import {CourseDetails} from '../../Components/CourseDetails';
import styles from './style';

export const CourseDetailsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Icon
          name={'chevron-forward-outline'}
          style={{fontSize: 30, textAlign: 'right', marginHorizontal: 20}}
        />
        <Text
          style={{
            textAlign: 'right',
            fontSize: 25,
            marginHorizontal: 20,
            marginVertical: 5,
          }}>
          {Strings.CoursDetailsTitle}
        </Text>
        <CourseDetails />
        <View style={{marginHorizontal: 20, marginTop: 5}}>
          <AppButton
            title={placeholder.LessonTitle}
            titleStyle={{paddingBottom: 10, fontSize: 17}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
