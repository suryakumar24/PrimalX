import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from './screens/OnBoard';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import MobileLogin from './screens/MobileLogin';
import OTP from './screens/OTP';
import SignupIntro from './screens/SignupIntro';
import Wallet from './screens/wallet/Wallet';
import BuyWithFiat from './screens/wallet/BuyWithFiat';
import DepositCrypto from './screens/wallet/DepositCrypto';
import DepositCryptoCoin from './screens/wallet/DepositCryptoCoin';
import DepositHistory from './screens/wallet/DepositHistory';
import DepositDetails from './screens/wallet/DepositDetails';
import TraceLostDeposit from './screens/wallet/TraceLostDeposit';
import Withdraw from './screens/wallet/Withdraw';
import ConfirmWithdraw from './screens/wallet/ConfirmWithdraw';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    initialRouteName="WalletScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardScreen" component={OnBoard} />
      <Stack.Screen name="SignupScreen" component={SignUp} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="MobileLoginScreen" component={MobileLogin} />
      <Stack.Screen name="OTPScreen" component={OTP} />
      <Stack.Screen name="SignupIntroScreen" component={SignupIntro} />
      <Stack.Screen name="WalletScreen" component={Wallet} />
      <Stack.Screen name="BuyWithFiatScreen" component={BuyWithFiat} />
      <Stack.Screen name="DepositCryptoScreen" component={DepositCrypto} />
      <Stack.Screen name="DepositCryptoCoinScreen" component={DepositCryptoCoin} />
      <Stack.Screen name="DepositHistoryScreen" component={DepositHistory} />
      <Stack.Screen name="DepositDetailsScreen" component={DepositDetails} />
      <Stack.Screen name="TraceLostDepositScreen" component={TraceLostDeposit} />
      <Stack.Screen name="WithdrawScreen" component={Withdraw} />
      <Stack.Screen name="ConfirmWithdrawScreen" component={ConfirmWithdraw} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
