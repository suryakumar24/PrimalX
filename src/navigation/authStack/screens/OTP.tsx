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
import {OtpInput} from 'react-native-otp-entry';

export default function OTP({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [phone, setPhone] = React.useState('');
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: Colors.background,
        paddingTop: 50,
        paddingHorizontal: 20,
        height: Dimensions.get('window').height,
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
        }}>
        Please Enter the Code
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '400',
          marginTop: 5,
          color: Colors.black,
          textAlign: 'center',
          marginBottom: 40,
        }}>
        We sent email to +971 50********50
      </Text>
      <SvgFromXml xml={Svgs.envelope} />
      <OtpInput
        theme={{
          containerStyle: {
            marginVertical: 20,
          },
          pinCodeTextStyle: {
            color: Colors.black,
            fontSize: 24,
          },
          pinCodeContainerStyle: {
            borderWidth: 1,
            borderColor: Colors.grey,
            backgroundColor: Colors.white,
          },
          focusedPinCodeContainerStyle: {
            borderColor: Colors.primary,
          },
          filledPinCodeContainerStyle: {
            borderColor: Colors.primary,
          },
        }}
        numberOfDigits={6}
        onTextChange={text => console.log(text)}
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
          Didn't get a Code?
        </Text>
        <Pressable>
          <Text
            style={{
              color: Colors.primary,
              marginLeft: 5,
              fontWeight: '700',
              fontSize: 16,
            }}>
            Send Again
          </Text>
        </Pressable>
      </View>
      <CustomButton
        onPress={() => {}}
        title="Login"
        disabled={false}
        style={{marginTop: 40}}
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
