import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AppButton} from '../../Components/AppButton';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

export const RegisterScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Header}>
        <View style={styles.HeaderTitleWrapper}>
          <Text style={styles.HeaderTitle}>{Strings.LogInTitle}</Text>
        </View>
        <Icon name={'chevron-forward'} style={styles.BackIcon} />
      </View>
      <View style={styles.ImageWrapper}>
        <Image
          source={require('../../Assets/Images/Logo2.png')}
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
          underlined
          placeholder={placeholder.UpdateAccountPass}
          renderIcon={<Icon name={'key-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />
        <View style={{marginTop: 45}}>
          <AppButton
            title={placeholder.RegisterButton}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
            onPress = {() => {alert('reristerd')}}
          />
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <Text
            style={{fontSize: 15, marginHorizontal: 10, color: Colors.yellow}}>
            {Strings.LoginNow}
          </Text>
          <Text style={{fontSize: 15}}>{Strings.HaveAccount}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
