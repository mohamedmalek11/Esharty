import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Video from 'react-native-video';
import {Strings, placeholder} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';
import {LessonCard} from '../../Components/LessonCard';
import {DummyLessonCard} from '../../Ulitis/DummyData';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

export const CourseWatchScreen = () => {
  const RenderItem = ({item}) => {
    return <LessonCard LessonCard={item} />;
  };

  return (
    <SafeAreaView>
      <Icon
        name={'chevron-forward-outline'}
        style={{fontSize: 30, textAlign: 'right', marginHorizontal: 10}}
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
