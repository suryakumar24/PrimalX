import {
  BackHandler,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SvgFromXml} from 'react-native-svg';
import Svgs from '../../../assets/Svgs';
import Colors from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';

export default function OnBoard({navigation}: {navigation: any}) {
  const [steps, setSteps] = React.useState([
    {
      image: require('../../../assets/images/onboard1.png'),
      title: 'Take hold of your finances',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mauris massa pharetra.',
    },
    {
      image: require('../../../assets/images/onboard2.png'),
      title: 'Smart trading tools',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mauris massa pharetra.',
    },
    {
      image: require('../../../assets/images/onboard3.png'),
      title: 'Invest in the future',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mauris massa pharetra.',
    },
  ]);
  const [currentStep, setCurrentStep] = React.useState(0);
  useEffect(() => {
    const backAction = () => {
      if (currentStep === 0) {
        return false;
      } else {
        setCurrentStep(currentStep - 1);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [currentStep]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 10,
        backgroundColor: Colors.background,
      }}>
      <SvgFromXml xml={Svgs.logo} />
      <Image
        source={steps[currentStep].image}
        style={{
          width: Dimensions.get('window').width - 20,
          height: Dimensions.get('window').width - 20,
          resizeMode: 'contain',
        }}
        resizeMode="contain"
      />
      <ImageBackground
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={require('../../../assets/images/onboardbackground.png')}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            marginVertical: 20,
            textAlign: 'center',
            alignSelf: 'center',
            color: '#000',
          }}>
          {steps[currentStep].title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
            alignSelf: 'center',
            color: '#000',
          }}>
          {steps[currentStep].description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: currentStep == 0 ? 40 : 20,
              height: 8,
              borderRadius: 20,
              backgroundColor:
                currentStep === 0 ? Colors.primary : Colors.secondary,
            }}
          />
          <View
            style={{
              width: currentStep == 1 ? 40 : 20,
              height: 8,
              borderRadius: 20,
              backgroundColor:
                currentStep === 1 ? Colors.primary : Colors.secondary,
              marginHorizontal: 5,
            }}
          />
          <View
            style={{
              width: currentStep == 2 ? 40 : 20,
              height: 8,
              borderRadius: 20,
              backgroundColor:
                currentStep === 2 ? Colors.primary : Colors.secondary,
            }}
          />
        </View>
        <CustomButton
          title="Next"
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            if (currentStep < 2) {
              setCurrentStep(currentStep + 1);
            } else {
              navigation.replace('SignupScreen');
            }
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
