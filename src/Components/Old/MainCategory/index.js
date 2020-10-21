import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

export const MainCategory = (props) => {
  const {MainCategory} = props;

  return (
    <View style={{paddingTop: 15}}>
      <View style={styles.Card}>
        <Image
          source={require('../../Assets/Images/MainCategoryImage.png')}
          style={styles.Image}
        />
        <LinearGradient
          colors={[
            'rgba(255,255,255,0.0)',
            'rgba(0,0,0,0.1)',
            'rgba(0,0,0,0.3)',
          ]}
          style={styles.LinearGradient}></LinearGradient>

        <View style={styles.TextWrapper}>
          <View>
            <Text style={styles.MainText}>{MainCategory.title}</Text>
          </View>
          <View>
            <Text style={styles.SeconeryText}>{MainCategory.secTitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
