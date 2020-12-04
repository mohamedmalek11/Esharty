import React from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {Strings} from '../../Ulitis/Strings';
import {AppButton} from '../../Components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import {Card} from '../../Components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Ulitis/Colors';
import styles from './style';

const MyAcountLogIn = (props) => {
  const {IsLogedIn} = props;
  const navigation = useNavigation();
  if (IsLogedIn) {
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
            <Pressable
              style={styles.MyAccountAfterLogInCoursButtonWrapper}
              onPress={() => navigation.navigate('MyCoursesScreen')}>
              <Icon
                name={'play'}
                style={{
                  fontSize: scale(23),
                  color: Colors.yellow,
                  marginRight: scale(5),
                }}
              />
              <Text style={styles.MyAccountAfterLogInButton}>
                {Strings.MyAcountCoursButton}
              </Text>
            </Pressable>
            <Pressable
              style={styles.MyAccountAfterLogInUpdateButtonWrapper}
              onPress={() => navigation.navigate('UpdateAccountScreen')}>
              <Icon
                name={'settings'}
                style={{
                  fontSize: scale(23),
                  color: Colors.yellow,
                  marginRight: 10,
                }}
              />
              <Text style={styles.MyAccountAfterLogInButton}>
                {Strings.MyAcountUpdateButton}
              </Text>
            </Pressable>
          </View>
        </Card>
      </View>
    );
  } else {
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
                titleStyle={{fontSize: scale(12)}}
                onPress={() => navigation.navigate('LogInScreen')}
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
  }
};
export const MyAccountScreen = (props) => {
  const {IsLogedIn} = props;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.TitleWrapper}>
        <Text style={styles.Title}>{Strings.MyAcountScreenTitle}</Text>
      </View>
      <MyAcountLogIn IsLogedIn={IsLogedIn} />

      {/* MyAccount Details */}

      <Card style={styles.DetailsCard}>
        <View style={styles.AccountDetailsWrapper}>
          <Pressable
            style={styles.DetailsWrapper}
            onPress={() => navigation.navigate('ContactUsScreen')}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'call-sharp'} style={styles.DetailsIcon} />
              <Text style={styles.DetailsText}>
                {Strings.MyAcountContactUs}
              </Text>
            </View>
            <View>
              <Icon name={'chevron-back-sharp'} style={{fontSize: scale(23)}} />
            </View>
          </Pressable>
          <View
            style={{
              height: 0.5,
              backgroundColor: '#D5D5D5',
              marginTop: scale(3),
            }}
          />

          <Pressable
            style={styles.DetailsWrapper}
            onPress={() => navigation.navigate('AboutAppScreen')}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'information-sharp'}
                style={{fontSize: scale(23), marginRight: scale(8)}}
              />
              <Text style={styles.DetailsText}>{Strings.MyAcountAboutApp}</Text>
            </View>
            <View>
              <Icon name={'chevron-back-sharp'} style={{fontSize: scale(23)}} />
            </View>
          </Pressable>
          <View
            style={{
              height: 0.5,
              backgroundColor: '#D5D5D5',
              marginTop: scale(3),
            }}
          />

          <Pressable style={styles.DetailsWrapper} onPress={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'share-social-sharp'} style={styles.DetailsIcon} />
              <Text style={styles.DetailsText}>{Strings.MyAcountShareApp}</Text>
            </View>
            <View>
              <Icon name={'chevron-back-sharp'} style={{fontSize: scale(23)}} />
            </View>
          </Pressable>
          <View
            style={{
              height: 0.5,
              backgroundColor: '#D5D5D5',
              marginTop: scale(3),
            }}
          />
        </View>
        <View style={styles.DetailsIconsWrapper}>
          <View style={styles.ShareIconWrapperTwitter}>
            <Image
              source={require('../../Assets/Images/twitter.png')}
              style={styles.ShareIconTwitter}
            />
          </View>
          <View style={styles.ShareIconWrapperInsta}>
            <Image
              source={require('../../Assets/Images/instagram-logo.png')}
              style={styles.ShareIconInsta}
            />
          </View>
          <View style={styles.ShareIconWrapperFacebook}>
            <Image
              source={require('../../Assets/Images/facebook.png')}
              style={styles.ShareIconFacebook}
            />
          </View>
        </View>
        {IsLogedIn && (
          <View style={{alignItems: 'center', marginBottom: scale(30)}}>
            <Text
              style={{color: Colors.red, fontSize: scale(12)}}
              onPress={() => {}}>
              {Strings.LogOut}
            </Text>
          </View>
        )}
      </Card>
    </ScrollView>
  );
};
