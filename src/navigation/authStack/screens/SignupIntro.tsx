import {
  Dimensions,
  Image,
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

export default function SignupIntro({
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
        Get started in 3 easy steps
      </Text>
      <Image
        source={require('../../../assets/images/LockShield.png')}
        style={{
          width: Dimensions.get('window').width * 0.8,
          height: Dimensions.get('window').width * 0.8,
        }}
      />

      <CustomButton
        onPress={() => {}}
        title="Continue"
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
