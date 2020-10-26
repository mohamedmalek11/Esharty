import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import {Colors} from '../../Ulitis/Colors';

export class AppButton extends React.Component {
  render() {
    const {
      title,
      WrapperStyle,
      titleStyle,
      isLoading,
      disabled,
      onPress,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
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
        ]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={[{color: '#fff', fontWeight: 'bold'}, titleStyle]}
            onPress={disabled || isLoading ? null : onPress}>
            {title}
          </Text>
        )}
      </View>
    );
  }
}
