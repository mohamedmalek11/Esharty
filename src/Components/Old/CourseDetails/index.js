import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Currancy} from '../../Ulitis/Constants';
import {DummyCourseDetails, DummyLesson} from '../../Ulitis/DummyData';
import {Colors} from '../../Ulitis/Colors';
import {Strings, placeholder} from '../../Ulitis/Strings';
import {Card} from '../Card';
import styles from './style';

const Lesson = (props) => {
  const {Lesson} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        direction: 'rtl',
        backgroundColor: Colors.softBackground,
        borderRadius: 5,
        marginHorizontal: 20,
        height: 70,
        alignItems: 'center',
        marginVertical: 5,
      }}>
      <Image
        source={require('../../Assets/Images/Lesson.png')}
        style={{width: 60, height: 60, margin: 5}}
      />
      <Text style={{fontSize: 17, marginHorizontal: 10}}>{Lesson.Title}</Text>
    </View>
  );
};

export const CourseDetails = (props) => {
  const renderLesson = ({item}) => {
    return <Lesson Lesson={item} />;
  };
  return (
    <View>
      <Card style={styles.Container}>
        <View style={styles.ImageWrapper}>
          <Image
            source={require('../../Assets/Images/Courses1.png')}
            style={styles.Image}
          />
        </View>

        <View style={styles.ContentWrapper}>
          <Text style={styles.Title}>{DummyCourseDetails.Cost}</Text>

          <Text style={styles.Title}>
            {DummyCourseDetails.Price}
            {Currancy}
          </Text>
        </View>
        <View style={styles.DescriptionWrapper}>
          <Text style={styles.Description}>
            {DummyCourseDetails.Description}
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'right',
            marginHorizontal: 10,
            fontSize: 18,
            marginBottom: 10,
          }}>
          {Strings.CourseListTitle}
        </Text>

        <FlatList
          data={DummyLesson}
          renderItem={renderLesson}
          style={{height: 150}}
        />
      </Card>
    </View>
  );
};
