import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Input = (props) => {
  const {
    style,
    placeholder,
    borderd,
    underlined,
    borderWidth,
    renderIcon,
    borderRadius,
    borderColor,
    secureTextEntry,
    underlinedColore,
    WrapperStyle,
    underlinedHeight,
    onChangeText,
    autoCorrect,
    autoCompleteType,
    TextInputStyle,
    justifyContent,
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
          justifyContent: justifyContent || 'flex-start',
          direction: 'rtl',
          marginTop: marginTop,
          marginBottom: 10,
        }}>
        <View style={styles.IconWrapper}>{renderIcon}</View>
        <TextInput
          placeholder={placeholder}
          {...rest}
          style={TextInputStyle}
          onChangeText={onChangeText}
          autoCorrect={autoCorrect}
          autoCompleteType={autoCompleteType}
          secureTextEntry={secureTextEntry}
        />
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
};
const styles = StyleSheet.create({
  IconWrapper: {},
});
