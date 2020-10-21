import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '../Card';
import styles from './style';

export const Topics = (props) => {
  const {Topics} = props;

  return (
    <View>
      <Card style={styles.TopicsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View style={styles.TopicsTextWrapper}>
            <Text
              style={{
                fontSize: 17,
                marginBottom: 10,
                textAlign: 'right',
              }}>
              {Topics.title}
            </Text>
            <Text style={{color: '#676767', textAlign: 'right'}}>
              {Topics.desciption}
            </Text>
          </View>
          <View>
            <Image
              source={require('../../Assets/Images/TopicsImage.png')}
              style={{width: 100, height: 100}}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};
