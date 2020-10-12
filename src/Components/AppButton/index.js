import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import styles from './styles';

export class AppButton extends React.Component {
  render() {
    const {
      title,
      WrapperStyle,
      titleStyle,
      isLoading,
      disabled,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        disabled={disabled || isLoading}
        style={[
          styles.wrapper,
          WrapperStyle,
          disabled ? styles.disabled : null,
        ]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </View>
    );
  }
}
