import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';
import {Card} from '../../Components/Card';
import {MyAccountDetails} from '../../Components/MyAccountDetails';
import styles from './style';

const MyAcountLogIn = (props) => {
  return (
    <View>
      <Card style={styles.MyAcountLogInContainer}>
        <View style={styles.MyAcountLogInWrapper}>
          <View style={styles.MyAcountLogInTextWrapper}>
            <Text style={styles.MyAcountLogInGreetingText}>
              {Strings.MyAcountGreetingText}
            </Text>
            <AppButton
              title={Strings.MyAcountLogInText}
              WrapperStyle={styles.MyAcountLogInLogInText}
            />
          </View>
          <View style={styles.MyAcountLogInImageWrapper}>
            <Image
              source={require('../../Assets/Images/User.png')}
              style={styles.MyAcountLogInImage}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export const MyAccountScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.TitleWrapper}>
        <Text style={styles.Title}>{Strings.MyAcountScreenTitle}</Text>
      </View>
      <MyAcountLogIn />
      <MyAccountDetails IsLogedIn = {false} />
    </SafeAreaView>
  );
};
