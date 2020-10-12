import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function Input(props) {
  const {
    style,
    placeholder,
    borderd,
    underlined,
    borderWidth,
    renderIcon,
    borderRadius,
    borderColor,
    underlinedColore,
    WrapperStyle,
    underlinedHeight,
    marginTop,
    ...rest
  } = props;
  return (
    <View
      style={[
        // Borderd View:
        borderd && {
          borderWidth: borderWidth || 1,
          padding: 5,
          borderRadius: borderRadius || 5,
          borderColor: borderColor || '#bbb',
        },
        WrapperStyle,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          direction: 'rtl',
          marginTop: marginTop,
          marginBottom: 5,
        }}>
        <View style={styles.IconWrapper}>{renderIcon}</View>
        <TextInput placeholder={placeholder} {...rest} style={{}} />
      </View>

      {underlined && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: underlinedColore || '#e6e6e6',
            marginTop: 3,
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  IconWrapper: {},
});
