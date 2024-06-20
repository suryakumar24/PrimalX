import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

export default function CustomButton({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  ...rest
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
  rest?: any;
}) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: disabled ? Colors.lightGrey : Colors.primary,
          padding: 10,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
          alignSelf: 'stretch',
        },
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
      {...rest}>
      <Text
        style={[
          {
            color: disabled ? Colors.secondary : '#fff',
            fontSize: 16,
            fontWeight: '600',
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
