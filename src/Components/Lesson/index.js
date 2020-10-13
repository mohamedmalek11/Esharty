import React from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../Ulitis/Colors';
import {Lesson1} from '../../Ulitis/DummyData';

export const Lesson = (props) => {
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
        marginVertical: 5
      }}>
      <Image
        source={require('../../Assets/Images/Lesson.png')}
        style={{width: 60, height: 60, margin: 5}}
      />
      <Text style={{fontSize: 17, marginHorizontal: 10}}>{Lesson.Title}</Text>
    </View>
  );
};
