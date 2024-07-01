import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';

const DepositCrypto = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {
    const[searchQuery, setSearchQuery] = useState('');
    const cryptoData = [
      {
          symbol: Svgs.bitcoin,
          coin: 'BTC',
          coinName: 'bitcoin'
      },
      {
        symbol: Svgs.bitcoin,
        coin: 'BTC',
        coinName: 'bitcoin'
    },
    {
      symbol: Svgs.bitcoin,
      coin: 'BTC',
      coinName: 'bitcoin'
  },
  {
    symbol: Svgs.bitcoin,
    coin: 'BTC',
    coinName: 'bitcoin'
}];
const handlePaymentClick = () =>{
  navigation.navigate('DepositHistoryScreen');
}
const handleCryptoPaymentButton = () =>{
  navigation.navigate('DepositCryptoCoinScreen');
}
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <SvgFromXml xml={Svgs.search} />
              <TextInput style={styles.textInput} placeholder="Search" 
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)} />
            </View>
            <TouchableOpacity style={styles.cancel} onPress={()=>navigation.goBack()}>
                <Text style={{fontSize:15}}>Cancel</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={{fontSize:15}}>Recommended</Text>
          <TouchableOpacity style={styles.crypto} onPress={handleCryptoPaymentButton}>
            <Text style={{fontSize:15, textAlign:'center', color:'#000000'}}>BTC</Text>
          </TouchableOpacity>
        </View>
        
        {cryptoData.map((crypto, index) =>
          <TouchableOpacity key={`${crypto.coinName}+${index}`} style={styles.cryptoCoinContainer} onPress={handlePaymentClick}>
            <SvgFromXml width={30} height={30} xml={crypto.symbol} />
            <Text style={{fontSize:20, paddingHorizontal:10, color:'#000000'}}>{crypto.coin}</Text>
            <Text style={{fontSize:15, paddingHorizontal:10, color:'#696F8C'}}>{crypto.coinName}</Text>
          </TouchableOpacity>
        )}
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
    marginTop:30
  },
  searchContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:50,
    paddingHorizontal:20,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 40,
    borderColor: '#dcdce5',
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: 16,
    backgroundColor: '#D7D9E4',
  },
  cancel:{
    marginHorizontal: 10,
  },
  textInput:{
    fontSize:15,
    paddingHorizontal:10
  },
  recommendedContainer:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:30,
    marginTop:20,
  },
  crypto:{
    marginLeft:0,
    marginTop:20,
    padding:10,
    backgroundColor:'#D9D9D9',
    borderRadius:5,
    width:80,
  },
  cryptoCoinContainer:{
    flexDirection:'row',
    marginHorizontal:30,
    alignItems: 'center',
    marginTop:40,
    marginBottom:-25,
  },
});

export default DepositCrypto;