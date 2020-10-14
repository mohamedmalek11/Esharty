import React from 'react';
import {View, Text, Image, _Image} from 'react-native';
import {placeholder, Strings} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';

export const CompleteCourseWarning = () => {
  return (
    <View
      style={{
        maxWidth: 350,
        alignSelf: 'center',
        borderRadius: 7,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          padding: 10,
          paddingBottom: 30,
        }}>
        {Strings.Warning}
      </Text>
      <View
        style={{
          backgroundColor: 'rgba(237, 159, 11, 0.11)',
          borderRadius: 100,
          alignSelf: 'center',
          width: 120,
          height: 120,
        }}>
        <Image
          source={require('../../Assets/Images/problem.png')}
          style={{alignSelf: 'center', width: 102, height: 95}}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 23,
          padding: 10,
          paddingBottom: 30,
          paddingHorizontal: 40,
        }}>
        {Strings.CompleteCourceText}
      </Text>
      <View style={{
          padding: 12,
          
        }}>
        <AppButton
          title={placeholder.Close}
          titleStyle={{fontSize: 16, padding: 5}}
        />
      </View>
    </View>
  );
};
