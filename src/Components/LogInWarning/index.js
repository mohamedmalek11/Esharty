import React from 'react';
import {View, Text, Image, _Image} from 'react-native';
import {placeholder, Strings} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';

export const LogInWarning = () => {
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
          fontSize: 23,
          padding: 10,
          paddingBottom: 30,
        }}>
        {Strings.LogInWarning}
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
          source={require('../../Assets/Images/userOrange.png')}
          style={{alignSelf: 'center', width: 85, height: 103, marginTop: 7}}
        />
      </View>

      <View
        style={{
          padding: 10,
        }}>
        <AppButton
          title={placeholder.LogInButton}
          titleStyle={{fontSize: 16, fontWeight: 'normal'}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}>
        <AppButton
          title={placeholder.Close}
          titleStyle={{fontSize: 16, color: '#000', fontWeight: 'normal'}}
          WrapperStyle={{backgroundColor: '#fff',borderColor: '#000'}}
        />
      </View>
    </View>
  );
};
