import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

export default function SocailButton({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  icon,
  ...rest
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
  icon: any;
  rest?: any;
}) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: disabled ? Colors.secondary : Colors.white,
          padding: 10,
          borderRadius: 12,
          alignItems: 'center',
          height: 60,
          alignSelf: 'stretch',
          flexDirection: 'row',
          borderWidth: 0.5,
          borderColor: Colors.secondary,
        },
        style,
      ]}>
      <View style={{marginRight: 10}}>{icon}</View>
      <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
