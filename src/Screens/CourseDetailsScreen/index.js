import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import {AppButton} from '../../Components/AppButton';
import {placeholder, Strings} from '../../Ulitis/Strings';
import {scale} from 'react-native-size-matters';
import {Colors} from '../../Ulitis/Colors';
import {DummyCourseDetails, DummyLesson} from '../../Ulitis/DummyData';
import {useNavigation} from '@react-navigation/native';
import {Currancy} from '../../Ulitis/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../../Components/Card';
import styles from './style';

const Lesson = (props) => {
  const {Lesson} = props;
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        direction: 'rtl',
        backgroundColor: Colors.softBackground,
        borderRadius: scale(5),
        marginHorizontal: scale(20),
        height: scale(70),
        alignItems: 'center',
        marginVertical: scale(5),
      }}
      onPress={() => navigation.navigate('CourseWatchScreen')}>
      <Image
        source={require('../../Assets/Images/Lesson.png')}
        style={{width: scale(60), height: scale(60), margin: scale(5)}}
      />
      <Text style={{fontSize: scale(17), marginHorizontal: scale(10)}}>
        {Lesson.Title}
      </Text>
    </Pressable>
  );
};

export const CourseDetails = (props) => {
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
            marginHorizontal: scale(10),
            fontSize: scale(18),
            marginBottom: scale(10),
          }}>
          {Strings.CourseListTitle}
        </Text>

        <FlatList
          data={DummyLesson}
          renderItem={({item}) => {
            return <Lesson Lesson={item} />;
          }}
          style={{height: scale(250)}}
        />
      </Card>
    </View>
  );
};

export const CourseDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <Icon
          name={'chevron-forward-outline'}
          style={{
            fontSize: scale(30),
            textAlign: 'right',
            marginHorizontal: scale(20),
          }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            textAlign: 'right',
            fontSize: scale(25),
            marginHorizontal: scale(20),
            marginVertical: scale(5),
          }}>
          {Strings.CoursDetailsTitle}
        </Text>
        <CourseDetails />

        <View style={{marginHorizontal: scale(20), marginTop: scale(5)}}>
          <AppButton
            title={placeholder.LessonTitle}
            titleStyle={{paddingBottom: scale(5), fontSize: scale(15)}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
