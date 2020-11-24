import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Strings} from '../../Ulitis/Strings';
import styles from './style';

export const AboutAppScreen = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Header}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.HeaderTitle}>{Strings.AboutAppTitle}</Text>
        </View>
        <Icon
          name={'chevron-forward'}
          style={styles.BackIcon}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView>
        <View style={styles.ImageWrapper}>
          <Image
            source={require('../../Assets/Images/Logo2.png')}
            style={styles.Image}
          />
        </View>

        <View style={styles.AboutAppTextWrapper}>
          <Text style={styles.AboutAppText}>{Strings.AboutAppText}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
