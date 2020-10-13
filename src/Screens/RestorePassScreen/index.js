import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AppButton} from '../../Components/AppButton';
import {Card} from '../../Components/Card';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

export const RestorePassScreen = (props) => {
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
        />
        <Card style={{marginTop: 45}}>
          <AppButton
            title={placeholder.RestorePassButton}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
            onPress={() => {
              alert('reristerd');
            }}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};
