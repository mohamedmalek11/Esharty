import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AppButton} from '../../Components/AppButton';
import {Card} from '../../Components/Card';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

const ValidateMail = (MailText) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(MailText);
};

export const RestorePassScreen = (props) => {
  const [mailVal, ChangedMailVal] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>{Strings.RestorePassTitle}</Text>
      </View>
      <Card style={styles.IconWrapper}>
        <Icon name={'close-outline'} style={styles.Icon} />
      </Card>
      <View style={styles.InputWrapper}>
        <Input
          underlined
          placeholder={placeholder.ConactUsMail}
          renderIcon={<Icon name={'mail-outline'} style={styles.InputIcon} />}
          marginTop={50}
          onChangeText={ChangedMailVal}
        />
        <Card style={{marginTop: 45}}>
          <AppButton
            title={placeholder.RestorePassButton}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
            onPress={() => {
              if (!ValidateMail(mailVal)) {
                alert('wrong ');
                return;
              }
              {
                alert('you enterd ' + mailVal);
                return;
              }
            }}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};
