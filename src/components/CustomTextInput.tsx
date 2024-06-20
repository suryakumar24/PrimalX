import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {SvgFromXml} from 'react-native-svg';
import Svgs from '../assets/Svgs';

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
  icon,
  validated,
  keyboardType,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: any;
  icon?: any;
  validated?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
}) {
  return (
    <View
      style={[
        {
          alignSelf: 'stretch',
          height: 60,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: Colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}>
      {icon && (
        <View
          style={{
            marginLeft: 20,
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {icon}
        </View>
      )}
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: Colors.secondary,
            fontSize: 12,
            fontWeight: '200',
            height: 15,
            marginTop: 5,
            position: 'absolute',
          }}>
          {placeholder}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{
            flex: 1,
            fontSize: 16,
            color: Colors.black,
            padding: 0,
          }}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
      {validated && (
        <View
          style={{
            marginLeft: 5,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgFromXml xml={Svgs.check} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
