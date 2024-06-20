import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../utils/Colors';
import {SvgFromXml} from 'react-native-svg';
import Svgs from '../../../assets/Svgs';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';

export default function Login({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView
      style={{
        height: Dimensions.get('window').height,
        alignItems: 'center',
        backgroundColor: Colors.background,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <SvgFromXml xml={Svgs.backArrow} />
        </TouchableOpacity>
        <SvgFromXml xml={Svgs.logo} />
        <View style={{width: 24}} />
      </View>
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          marginTop: 20,
          color: Colors.black,
          textAlign: 'center',
          marginHorizontal: 20,
        }}>
        Login to your Account
      </Text>
      <CustomTextInput
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="Email address"
        secureTextEntry={false}
        style={{marginTop: 20}}
        icon={<SvgFromXml xml={Svgs.emailBlue} />}
        validated={true}
        value={email}
      />
      <CustomTextInput
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="Password"
        secureTextEntry={false}
        style={{marginTop: 15}}
        icon={<SvgFromXml xml={Svgs.lockBlue} />}
        validated={true}
        value={email}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
          }}>
          Forgot Your Password?
        </Text>
        <Pressable>
          <Text
            style={{
              color: Colors.primary,
              marginLeft: 5,
              fontWeight: '700',
              fontSize: 16,
            }}>
            Click Here
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
          }}>
          Login with Mobile
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('MobileLoginScreen');
          }}>
          <Text
            style={{
              color: Colors.primary,
              marginLeft: 5,
              fontWeight: '700',
              fontSize: 16,
            }}>
            Click Here
          </Text>
        </Pressable>
      </View>
      <CustomButton
        onPress={() => {}}
        title="Sign in"
        disabled={true}
        style={{marginTop: 20}}
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
            or continue with
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Colors.grey,
            }}
          />
        </View>
        <View
          style={{
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 12,
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderColor: Colors.grey,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SvgFromXml xml={Svgs.facebook} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 12,
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderColor: Colors.grey,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            <SvgFromXml xml={Svgs.apple} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 12,
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderColor: Colors.grey,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SvgFromXml xml={Svgs.google} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
