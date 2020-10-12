import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {Card} from '../Card';
import styles from './style';

export function MainCategory(props) {
  const {MainCategory} = props;

  return (
    <View style={styles.Container}>
      <View style={styles.wrapper}>
        <Card>
          <Image
            source={require('../../Assets/Images/MainCategoryImage.png')}
            style={styles.Image}
          />
          <Image
            source={require('../../Assets/Images/shadow.png')}
            style={styles.Image2}
          />
          <View style={styles.TextWrapper}>
            <View>
              <Text style={styles.MainText}>{MainCategory.title}</Text>
            </View>
            <View>
              <Text style={styles.SeconeryText}>{MainCategory.secTitle}</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}
