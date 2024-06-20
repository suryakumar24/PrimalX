import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from './screens/OnBoard';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import MobileLogin from './screens/MobileLogin';
import OTP from './screens/OTP';
import SignupIntro from './screens/SignupIntro';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardScreen" component={OnBoard} />
      <Stack.Screen name="SignupScreen" component={SignUp} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="MobileLoginScreen" component={MobileLogin} />
      <Stack.Screen name="OTPScreen" component={OTP} />
      <Stack.Screen name="SignupIntroScreen" component={SignupIntro} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
