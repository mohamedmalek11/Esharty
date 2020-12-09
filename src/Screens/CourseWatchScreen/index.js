import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Video from 'react-native-video';
import {Strings, placeholder} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';
import {scale} from 'react-native-size-matters';
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
        marginHorizontal: scale(10),
        height: scale(55),
        alignItems: 'center',
        marginVertical: scale(5),
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Images/Lesson.png')}
          style={{width: scale(50), height: scale(50)}}
        />
        <Text style={{fontSize: scale(15), marginHorizontal: scale(10)}}>
          {LessonCard.Title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {LessonCard.IsFinish ? (
          <Icon
            name={'checkmark-outline'}
            style={{
              color: '#fff',
              fontSize: scale(19),
              padding: scale(1),
              backgroundColor: '#32a44d',
              borderRadius: scale(11),
              overflow: 'hidden',
              marginRight: scale(5),
              fontWeight: 'bold',
            }}
          />
        ) : null}
        <Icon
          name={'play'}
          style={{
            color: Colors.yellow,
            fontSize: scale(15),
            padding: scale(4),
            borderColor: Colors.yellow,
            borderWidth: scale(1),
            borderRadius: scale(13),
            overflow: 'hidden',
            marginRight: scale(10),
            fontWeight: 'bold',
            paddingRight: scale(6),
            marginLeft: scale(10),
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
        style={{
          fontSize: scale(30),
          textAlign: 'right',
          marginHorizontal: scale(10),
        }}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Text
          style={{
            textAlign: 'right',
            fontSize: scale(21),
            marginHorizontal: scale(20),
            marginVertical: scale(0),
          }}>
          {Strings.FirstLesson}
        </Text>
        <View style={{paddingHorizontal: scale(10)}}>
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
              titleStyle={{fontSize: scale(12)}}
              WrapperStyle={{marginHorizontal: scale(10)}}
            />
            <View style={{alignItems: 'center', marginHorizontal: scale(10)}}>
              <Text style={{fontSize: scale(12)}}>{Strings.VideoLenth}</Text>
              <Text style={{fontSize: scale(12)}}>
                {Strings.VideoLenthTime}
              </Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'right',
              marginTop: scale(15),
              fontSize: scale(15),
            }}>
            {Strings.CourseListTitle}
          </Text>
          <FlatList
            data={DummyLessonCard}
            renderItem={RenderItem}
            style={{paddingVertical: scale(5), marginBottom: scale(25)}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
