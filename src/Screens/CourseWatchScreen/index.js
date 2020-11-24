import React from 'react';
import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import Video from 'react-native-video';
import {Strings, placeholder} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../Ulitis/Colors';
import {Card} from '../../Components/Card';
import {DummyLessonCard} from '../../Ulitis/DummyData';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const LessonCard = (props) => {
  const {LessonCard} = props;
  return (
    <Card
      style={{
        flexDirection: 'row',
        direction: 'rtl',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 10,
        height: 60,
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Images/Lesson.png')}
          style={{width: 50, height: 50}}
        />
        <Text style={{fontSize: 15, marginHorizontal: 10}}>
          {LessonCard.Title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {LessonCard.IsFinish ? (
          <Icon
            name={'checkmark-outline'}
            style={{
              color: '#fff',
              fontSize: 19,
              padding: 1,
              backgroundColor: '#32a44d',
              borderRadius: 11,
              overflow: 'hidden',
              marginRight: 5,
              fontWeight: 'bold',
            }}
          />
        ) : null}
        <Icon
          name={'play'}
          style={{
            color: Colors.yellow,
            fontSize: 20,
            padding: 4,
            borderColor: Colors.yellow,
            borderWidth: 1,
            borderRadius: 16,
            overflow: 'hidden',
            marginRight: 10,
            fontWeight: 'bold',
            paddingRight: 6,
            marginLeft: 10,
          }}
        />
      </View>
    </Card>
  );
};

export const CourseWatchScreen = () => {
  const navigation = useNavigation();
  const RenderItem = ({item}) => {
    return <LessonCard LessonCard={item} />;
  };

  return (
    <SafeAreaView>
      <Icon
        name={'chevron-forward-outline'}
        style={{fontSize: 30, textAlign: 'right', marginHorizontal: 10}}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          textAlign: 'right',
          fontSize: 23,
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        {Strings.FirstLesson}
      </Text>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.VideoWrapper}>
          <Video
            source={require('../../Assets/Images/SignVideo.mp4')}
            controls={true}
            style={styles.backgroundVideo}
            paused={true}
          />
        </View>
        <View style={styles.Details}>
          <AppButton
            title={placeholder.FinishًWatchButton}
            titleStyle={{fontSize: 12}}
            WrapperStyle={{marginHorizontal: 10}}
          />
          <View style={{alignItems: 'center', marginHorizontal: 10}}>
            <Text>{Strings.VideoLenth}</Text>
            <Text>{Strings.VideoLenthTime}</Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'right',
            marginTop: 25,
            fontSize: 17,
          }}>
          {Strings.CourseListTitle}
        </Text>
        <FlatList
          data={DummyLessonCard}
          renderItem={RenderItem}
          style={{paddingVertical: 10}}
        />
      </View>
    </SafeAreaView>
  );
};
