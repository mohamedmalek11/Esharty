import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AppButton} from '../../Components/AppButton';
import {placeholder, Strings} from '../../Ulitis/Strings';
import {Card} from '../../Components/Card';
import styles from './style';

const AccountSetting = (props) => {
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
          <View style={styles.AccountSettingImageWrapper}>
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

const ValidateName = (NameText) => {
  return /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
    NameText,
  );
};
const ValidateMail = (MailText) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(MailText);
};
const ValidatePass = (PassText) => {
  return /^[a-zA-Z0-9.-]{6,}$/.test(PassText);
};

export const UpdateAccountScreen = (props) => {
  const navigation = useNavigation();

  const [nameVal, ChangedNameVal] = React.useState('');
  const [mailVal, ChangedMailVal] = React.useState('');
  const [PassVal, ChangedPasslVal] = React.useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Header}>
        <View style={styles.HeaderTitleWrapper}>
          <Text style={styles.HeaderTitle}>{Strings.UpdateAccountTitle}</Text>
        </View>
        <Icon
          name={'chevron-forward'}
          style={styles.BackIcon}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.LogInWrapper}>
        <AccountSetting />
      </View>
      <View style={styles.InputWrapper}>
        <Input
          underlined
          placeholder={placeholder.ConactUsName}
          renderIcon={<Icon name={'person-outline'} style={styles.InputIcon} />}
          marginTop={50}
          onChangeText={ChangedNameVal}
        />
        <Input
          underlined
          placeholder={placeholder.ConactUsMail}
          renderIcon={<Icon name={'mail-outline'} style={styles.InputIcon} />}
          marginTop={50}
          onChangeText={ChangedMailVal}
        />
        <Input
          underlined
          placeholder={placeholder.UpdateAccountPass}
          renderIcon={<Icon name={'key-outline'} style={styles.InputIcon} />}
          marginTop={50}
          autoCorrect={false}
          autoCompleteType={'password'}
          onChangeText={ChangedPasslVal}
          secureTextEntry={true}
        />

        <View style={{justifyContent: 'center', flex: 1, marginBottom: 50}}>
          <AppButton
            title={placeholder.UpdateAccountButton}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
            onPress={() => {
              if (
                !ValidatePass(PassVal) ||
                !ValidateName(nameVal) ||
                !ValidateMail(mailVal)
              ) {
                alert('wrong ');
                return;
              }
              {
                alert('you enterd ' + nameVal + nameVal + mailVal);
                return;
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
