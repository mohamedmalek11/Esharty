import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../Card';
import styles from './style';

export function Dictionary(props) {
  const {Dictionary} = props;

  return (
    <View>
      <Card style={styles.Container}>
        <View style={styles.Wrapper}>
          <View style={styles.ImageWrapper}>
            <Image
              source={require('../../Assets/Images/Dictionary.png')}
              style={styles.Image}
            />
          </View>
          <View style={styles.ContentWrapper}>
            <View style={styles.IconWrapper}>
              <Card>
                <Icon name="eye" style={styles.Icon} />
              </Card>
            </View>

            <View style={styles.TextWrapper}>
              <Text style={styles.MainTitle}>{Dictionary.MainTitle}</Text>
              <Text style={styles.SecTite}>{Dictionary.SecTite}</Text>
            </View>
          </View>
          <View style={styles.DescriptionWrapper}>
            <Text style={styles.Description}>{Dictionary.Description}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
