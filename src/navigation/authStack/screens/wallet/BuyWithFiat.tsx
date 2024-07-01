import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';

const BuyWithFiat = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
    <View style={styles.container}>
        <View style={styles.selectPaymentContainer}>
            <TouchableOpacity style={styles.selectPaymentArrow} onPress={() => {
            navigation.goBack();
          }}>
                <SvgFromXml xml={Svgs.backArrow}/>
            </TouchableOpacity>
            <Text style={styles.selectPaymentHeading}>Select Payment Method</Text>
        </View>
        <View style={styles.onRampMoneyContainer}>
        <Image
        source={require('../../../../assets/images/onRampMoney.png')}
        style={{
          width: 41,
          height: 41,
          resizeMode: 'contain',
        }}
        resizeMode="contain"
      />
            <View style={styles.titleContainer}>
                <Text style={styles.onRampTitle}>OnrampMoney</Text>
                <Text style={styles.onRampSubTitle}>UPI, IMPS, FAST, SPEI, VietQR,Bank Transfer</Text>
            </View>
            <View style={{marginLeft:90}}>
                <SvgFromXml fill="#696F8C" width={25} height={25} xml={Svgs.rightArrow} />
            </View>
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F7FA',
    marginVertical:30
  },
  selectPaymentContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical:50
  },
  selectPaymentArrow:{
    marginHorizontal: 30,
  },
  selectPaymentHeading:{
    marginRight: 90,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'
  },
  onRampMoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor:'#FFFFFF',
    padding:20,
    borderRadius:20,
    paddingHorizontal:10
  },
  titleContainer:{
    alignItems: 'flex-start',
    marginLeft:10,
  },
  onRampTitle:{
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  onRampSubTitle:{
    fontSize: 10,
    color: '#000000',
  }
});

export default BuyWithFiat;