import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from '../../Components/Input';
import {Colors} from '../../Ulitis/Colors';
import {AppButton} from '../../Components/AppButton';
import {Card} from '../../Components/Card';
import {placeholder, Strings} from '../../Ulitis/Strings';
import styles from './style';

const ValidateCode = (CodeText) => {
  return /^[0-9]{5}$/.test(
    CodeText,
  );
};
export const ConfirmRestoreScreen = (props) => {
  const [CodeVal, ChangedCodeVal] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>{Strings.RestorePassTitle}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingTop: 30,
        }}>
        <Card style={styles.IconWrapper}>
          <Icon name={'close-outline'} style={styles.Icon} />
        </Card>
        <Text style={{fontSize: 15}}>{Strings.InterConfirmCode}</Text>
      </View>

      <View style={styles.InputWrapper}>
        <Input
          justifyContent={'center'}
          placeholder={placeholder.ConfirmCode}
          keyboardType="numeric"
          marginTop={50}
          onChangeText={ChangedCodeVal}
        />
        <Card style={{marginTop: 45}}>
          <AppButton
            title={placeholder.RestoreConfirmButton}
            WrapperStyle={{colore: Colors.yellow, paddingVertical: 10}}
            titleStyle={{fontSize: 17, paddingVertical: 7}}
            onPress={() => {
              if (
                !ValidateCode(CodeVal)
              ) {
                alert('wrong ');
                return;
              }
              {
                alert('you enterd ' + CodeVal);
                return;
              }
            }}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};
