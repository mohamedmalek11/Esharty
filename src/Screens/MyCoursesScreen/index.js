import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {dummyCourses} from '../../Ulitis/DummyData';
import {Card} from '../../Components/Card';
import {Strings} from '../../Ulitis/Strings';
import styles from './style';

const MyCourses = (props) => {
  const {MyCourses} = props;
  const navigation = useNavigation();
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
              <Pressable
                onPress={() => navigation.navigate('CourseDetailsScreen')}>
                <Text style={styles.MyCoursesButton}>
                  {Strings.CheckCourse}
                </Text>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </Card>
    </View>
  );
};

export const MyCoursesScreen = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <Icon
          name={'chevron-forward-outline'}
          style={styles.BackIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>{Strings.MyCoursesTitle}</Text>
        </View>
        <View>
          <FlatList
            data={dummyCourses}
            renderItem={({item}) => {
              return <MyCourses MyCourses={item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
