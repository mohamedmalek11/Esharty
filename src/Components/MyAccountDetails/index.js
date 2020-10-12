import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '../Card';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

export const MyAccountDetails = (props) => {
  return (
    <Card style={styles.Card}>
      <View style={styles.Wrapper}>
        <View style={styles.DetailsWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'call-sharp'} style={styles.DetailsIcon} />
            <Text style={styles.DetailsText}>تواصل معنا</Text>
          </View>
          <View>
            <Icon name={'chevron-back-sharp'} style={{fontSize: 25}} />
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#D5D5D5',
            marginTop: 3,
          }}
        />

        <View style={styles.DetailsWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name={'information-sharp'}
              style={{fontSize: 25, marginRight: 15}}
            />
            <Text style={styles.DetailsText}>عن التطبيق</Text>
          </View>
          <View>
            <Icon name={'chevron-back-sharp'} style={{fontSize: 25}} />
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#D5D5D5',
            marginTop: 3,
          }}
        />

        <View style={styles.DetailsWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'share-social-sharp'} style={styles.DetailsIcon} />
            <Text style={styles.DetailsText}>شارك التطبيق</Text>
          </View>
          <View>
            <Icon name={'chevron-back-sharp'} style={{fontSize: 25}} />
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#D5D5D5',
            marginTop: 3,
          }}
        />
      </View>
      <View style={styles.IconsWrapper}>
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
    </Card>
  );
};
