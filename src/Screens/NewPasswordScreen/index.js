import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AppButton} from '../../Components/AppButton';
import {Card} from '../../Components/Card';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

export const NewPasswordScreen = (props) => {
  const [PassVal, ChangedPasslVal] = React.useState('');
  const [ConfirmPassVal, ChangedConfirmPasslVal] = React.useState('');
  const ValidatePass = (PassText) => {
    return /^[a-zA-Z0-9.-]{6,}$/.test(PassText);
  };
  const ValidateConfirmPass = (ConfirmPassText) => {
    return /^[a-zA-Z0-9.-]{6,}$/.test(ConfirmPassText);
  };
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
          placeholder={placeholder.NewPassword}
          renderIcon={<Icon name={'key-outline'} style={styles.InputIcon} />}
          marginTop={50}
          autoCorrect={false}
          autoCompleteType={'password'}
          onChangeText={ChangedPasslVal}
          secureTextEntry={false}
        />
        <Input
          underlined
          placeholder={placeholder.NewPasswordConfirm}
          renderIcon={<Icon name={'key-outline'} style={styles.InputIcon} />}
          marginTop={50}
          autoCorrect={false}
          autoCompleteType={'password'}
          onChangeText={ChangedConfirmPasslVal}
          secureTextEntry={false}
        />
        <Card style={{marginTop: 45}}>
          <AppButton
            title={placeholder.SavePassword}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
            onPress={() => {
              if (
                !ValidatePass(PassVal) ||
                !ValidateConfirmPass(ConfirmPassVal) ||
                PassVal != ConfirmPassVal
              ) {
                alert('wrong ');
                return;
              }
              {
                alert('you enterd ' + PassVal);
                return;
              }
            }}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};
