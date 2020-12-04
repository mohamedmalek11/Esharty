import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import {dummyCourses} from '../../Ulitis/DummyData';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Strings} from '../../Ulitis/Strings';
import {Card} from '../../Components/Card';
import styles from './style';

const Courses = (props) => {
  const {Courses} = props;
  const navigation = useNavigation();

  return (
    
      <Card style={styles.Card}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0.0)',
            'rgba(0,0,0,0.1)',
            'rgba(0,0,0,0.2)',
          ]}
          style={styles.LinearGradient}
        />

        <Image
          source={require('../../Assets/Images/Courses1.png')}
          style={styles.Image}
        />
        <View style={styles.TextWrapper}>
          <View>
            <Text style={styles.MainText}>{Courses.Title}</Text>
          </View>
          <View style={styles.Details}>
            <Pressable
              onPress={() => navigation.navigate('CourseDetailsScreen')}>
              <Text style={styles.Button}>{Strings.CoursesDetialsButton}</Text>
            </Pressable>

            <Text style={styles.SeconeryText}>{Courses.Cost}</Text>
            <Text style={styles.SeconeryText}>{Courses.Courses}</Text>
          </View>
        </View>
      </Card>
    
  );
};

export const CoursesScreen = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>{Strings.CoursesTitle}</Text>
        </View>
        <View>
          <FlatList
            data={dummyCourses}
            renderItem={({item}) => {
              return <Courses Courses={item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
