import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {AppButton} from '../../Components/AppButton';
import styles from './style';

export function ContactUsScreen(props) {
  return (
    <SafeAreaView style={{}}>
      <View style={styles.Header}>
        <View style={styles.HeaderTitleWrapper}>
          <Text style={styles.HeaderTitle}>تواصل معنا</Text>
        </View>
        <Icon name={'chevron-forward'} style={styles.BackIcon} />
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
          placeholder={'الأسم'}
          renderIcon={<Icon name={'person-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />
        <Input
          underlined
          placeholder={'البريد الإلكتروني'}
          renderIcon={<Icon name={'mail-outline'} style={styles.InputIcon} />}
          marginTop={50}
        />
        <Input
          borderd
          placeholder={'هنا نص الرسالة'}
          WrapperStyle={{marginTop: 30, padding: 20, paddingBottom: 150}}
          borderColor={'#E5E5E5'}
        />
        <View style = {{marginTop: 30}}>
          <AppButton title={'ارســال'} style = {{colore: '#ED9F0B'}}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
