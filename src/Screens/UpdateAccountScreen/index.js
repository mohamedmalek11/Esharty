import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AccountSetting} from '../../Components/AccountSetting';
import {AppButton} from '../../Components/AppButton';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

export const UpdateAccountScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Header}>
        <View style={styles.HeaderTitleWrapper}>
          <Text style={styles.HeaderTitle}>{Strings.UpdateAccountTitle}</Text>
        </View>
        <Icon name={'chevron-forward'} style={styles.BackIcon} />
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
        />
        <Input
          underlined
          placeholder={placeholder.ConactUsMail}
          renderIcon={<Icon name={'mail-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />
        <Input
          underlined
          placeholder={placeholder.UpdateAccountPass}
          renderIcon={<Icon name={'key-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />

        <View style={{justifyContent: 'center', flex: 1, marginBottom: 50}}>
          <AppButton
            title={placeholder.UpdateAccountButton}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
