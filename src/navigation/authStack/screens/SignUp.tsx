import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Svgs from '../../../assets/Svgs';
import Colors from '../../../utils/Colors';
import SocailButton from '../../../components/SocailButton';
import CustomButton from '../../../components/CustomButton';

export default function SignUp({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
        paddingTop: 50,
        paddingHorizontal: 10,
      }}>
      <SvgFromXml xml={Svgs.logo} />
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          marginTop: 20,
          color: 'black',
          textAlign: 'center',
          marginHorizontal: 20,
        }}>
        Hello! Start your crypto Harvest today
      </Text>
      <SocailButton
        title="Continue with Facebook"
        icon={<SvgFromXml xml={Svgs.facebook} />}
        onPress={() => {}}
        style={{marginTop: 60}}
      />
      <SocailButton
        title="Continue with Google"
        icon={<SvgFromXml xml={Svgs.google} />}
        onPress={() => {}}
        style={{marginTop: 15}}
      />
      <SocailButton
        title="Continue with Apple"
        icon={<SvgFromXml xml={Svgs.apple} />}
        onPress={() => {}}
        style={{marginTop: 15}}
      />
      <CustomButton
        title="Sign up"
        onPress={() => {
          navigation.navigate('SignupIntroScreen');
        }}
        style={{marginTop: 15}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
            width: Dimensions.get('window').width,
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.grey,
            }}
          />
          <Text
            style={{
              color: Colors.black,
              marginHorizontal: 10,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Already have an account?
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.grey,
            }}
          />
        </View>
        <CustomButton
          title="Log in"
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={{
            marginTop: 30,
            marginHorizontal: 20,
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: Colors.primary,
          }}
          textStyle={{
            color: Colors.primary,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
