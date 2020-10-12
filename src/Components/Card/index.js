import React from 'react';
import {View} from 'react-native';
import styles from './style';

export const Card = (props) => {
  const {style, ...rest} = props;
  return <View {...rest} style={[styles.container, style]} />;
};
