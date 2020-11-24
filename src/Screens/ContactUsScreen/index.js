import React from 'react';
import {View, Text, SafeAreaView, Image,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {AppButton} from '../../Components/AppButton';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

export const ContactUsScreen = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{}}>
      <View style={styles.Header}>
        <View style={styles.HeaderTitleWrapper}>
          <Text style={styles.HeaderTitle}>{Strings.ConactUsTitle}</Text>
        </View>
        <Icon
          name={'chevron-forward'}
          style={styles.BackIcon}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.ImageWrapper}>
        <Image
          source={require('../../Assets/Images/Support.png')}
          style={styles.Image}
        />
      </View>
      <View style={styles.InputWrapper}>
        <Input
          underlined
          placeholder={placeholder.ConactUsName}
          renderIcon={<Icon name={'person-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />
        <Input
          underlined
          placeholder={placeholder.ConactUsMail}
          renderIcon={<Icon name={'mail-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />
        <Input
          borderd
          placeholder={placeholder.ContactUsMessage}
          WrapperStyle={{marginTop: 30, padding: 20, paddingBottom: 100}}
          borderColor={'#E5E5E5'}
        />
        <View style={{marginTop: 30}}>
          <AppButton
            title={placeholder.ContactUsSendButton}
            style={{colore: '#ED9F0B'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};
