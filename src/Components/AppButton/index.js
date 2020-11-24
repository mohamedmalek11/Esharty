import React from 'react';
import {Text, ActivityIndicator, View, Pressable} from 'react-native';
import {Colors} from '../../Ulitis/Colors';

export const AppButton = (props) => {
  const {title, WrapperStyle, titleStyle, isLoading, disabled, onPress} = props;

  return (
    <Pressable
      style={[
        {
          backgroundColor: Colors.yellow,
          borderColor: Colors.yellow,
          borderRadius: 7,
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        WrapperStyle,
        disabled ? {opacity: 0.4} : null,
        isLoading ? {paddingVertical: 17} : null,
      ]}
      onPress={disabled || isLoading ? null : onPress}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[{color: '#fff', fontWeight: 'bold'}, titleStyle]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
