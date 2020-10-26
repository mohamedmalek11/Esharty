import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';
import {Card} from '../../Components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Ulitis/Colors';
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

const MyAccountAfterLogIn = (props) => {
  return (
    <View>
      <Card style={styles.MyAccountAfterLogInContainer}>
        <View style={styles.MyAccountAfterLogInWrapper}>
          <View style={styles.MyAccountAfterLogInTextWrapper}>
            <Text style={styles.MyAccountAfterLogInAccDetailsText}>
              {Strings.MyAcountPersonName}
            </Text>
            <Text style={styles.MyAccountAfterLogInAccDetailsText}>
              {Strings.MyAcountPersonMail}
            </Text>
          </View>
          <View style={styles.MyAccountAfterLogInImageWrapper}>
            <Image
              source={require('../../Assets/Images/User.png')}
              style={styles.MyAccountAfterLogInImage}
            />
          </View>
        </View>
        <View style={styles.MyAccountAfterLogInButtonsWrapper}>
          <View style={styles.MyAccountAfterLogInCoursButtonWrapper}>
            <Icon
              name={'play'}
              style={{fontSize: 25, color: Colors.yellow, marginRight: 10}}
            />
            <Text style={styles.MyAccountAfterLogInButton}>
              {Strings.MyAcountCoursButton}
            </Text>
          </View>
          <View style={styles.MyAccountAfterLogInUpdateButtonWrapper}>
            <Icon
              name={'settings'}
              style={{fontSize: 25, color: Colors.yellow, marginRight: 10}}
            />
            <Text style={styles.MyAccountAfterLogInButton}>
              {Strings.MyAcountUpdateButton}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export const MyAccountScreen = (props) => {
  const {IsLogedIn} = props;
  return (
    <SafeAreaView>
      <View style={styles.TitleWrapper}>
        <Text style={styles.Title}>{Strings.MyAcountScreenTitle}</Text>
      </View>
      {IsLogedIn ? <MyAccountAfterLogIn /> : <MyAcountLogIn />}
      <MyAccountDetails IsLogedIn={IsLogedIn} />
    </SafeAreaView>
  );
};
