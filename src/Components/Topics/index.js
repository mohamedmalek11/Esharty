import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '../Card';
import styles from './style';

export function Topics(props) {
  const {Topics} = props

  return (
    <View>
      <Card style={styles.Container}>
        <View style={styles.Wrapper}>
          <View style={styles.TextWrapper}>
            <Text style={styles.MainText}>{Topics.title}</Text>
            <Text style={styles.Text}>
              {Topics.desciption}
            </Text>
          </View>
          <View style={styles.ImageWrapper}>
            <Image
              source={require('../../Assets/Images/TopicsImage.png')}
              style={styles.Image}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}
