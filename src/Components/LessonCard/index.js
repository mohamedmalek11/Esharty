import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '../Card';
import {Lesson1} from '../../Ulitis/DummyData';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Ulitis/Colors';

export const LessonCard = (props) => {
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
