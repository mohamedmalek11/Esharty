import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {dummyCourses} from '../../Ulitis/DummyData';
import LinearGradient from 'react-native-linear-gradient';
import {Strings} from '../../Ulitis/Strings';
import {Card} from '../../Components/Card';
import styles from './style';

const Courses = (props) => {
  const {Courses} = props;

  return (
    <View style={styles.wrapper}>
      <Card>
        <Image
          source={require('../../Assets/Images/Courses1.png')}
          style={styles.Image}
        />

        <View style={styles.TextWrapper}>
          <LinearGradient
            colors={[
              'rgba(255,255,255,0.0)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,0.4)',
            ]}
            style={styles.LinearGradient}>
            <View>
              <Text style={styles.MainText}>{Courses.Title}</Text>
            </View>
            <View style={styles.Details}>
              <Text style={styles.Button}>{Strings.CoursesDetialsButton}</Text>
              <Text style={styles.SeconeryText}>{Courses.Cost}</Text>
              <Text style={styles.SeconeryText}>{Courses.Courses}</Text>
            </View>
          </LinearGradient>
        </View>
      </Card>
    </View>
  );
};

export const CoursesScreen = (props) => {
  const renderCourses = ({item}) => {
    return <Courses Courses={item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>{Strings.CoursesTitle}</Text>
        </View>
        <View>
          <FlatList data={dummyCourses} renderItem={renderCourses} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
