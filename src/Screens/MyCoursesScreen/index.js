import React from 'react';
import {View, Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {dummyCourses} from '../../Ulitis/DummyData';
import {Strings} from '../../Ulitis/Strings';
import {MyCourses} from '../../Components/MyCourses';
import styles from './style';

export const MyCoursesScreen = (props) => {
  const renderCourses = ({item}) => {
    return <MyCourses MyCourses={item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Icon name={'chevron-forward-outline'} style={styles.BackIcon} />
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>{Strings.MyCoursesTitle}</Text>
        </View>
        <View>
          <FlatList data={dummyCourses} renderItem={renderCourses} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
