import React from 'react';
import {View, Text, Image} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {Card} from '../Card';
import styles from './style';

export const AccountSetting = (props) => {
  return (
    <View>
      <Card style={styles.AccountSettingContainer}>
        <View style={styles.AccountSettingWrapper}>
          <View style={styles.AccountSettingTextWrapper}>
            <Text style={styles.AccountSettingAccDetailsText}>
              {Strings.MyAcountPersonName}
            </Text>
            <Text style={styles.AccountSettingAccDetailsText}>
              {Strings.MyAcountPersonMail}
            </Text>
          </View>
          <View style={styles.AccountSettingmageWrapper}>
            <Image
              source={require('../../Assets/Images/User.png')}
              style={styles.AccountSettingImage}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};
