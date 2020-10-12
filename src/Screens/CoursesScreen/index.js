import React from 'react';
import {View, Text, ScrollView, SafeAreaView,FlatList} from 'react-native';
import {dummyCourses} from '../../Ulitis/DummyData'
import {Courses} from '../../Components/Courses';
import styles from './style';


export function CoursesScreen(props) {

    function renderCourses({item}) {
        return <Courses Courses={item} />;
    }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.TitleWrapper}>
          <Text style = {styles.Title}>الدورات</Text>
        </View>
        <View>
        <FlatList data={dummyCourses} renderItem={renderCourses} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
