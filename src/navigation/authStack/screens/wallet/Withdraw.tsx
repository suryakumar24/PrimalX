import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';
import CheckBox from '@react-native-community/checkbox';

const Withdraw = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {
    const[searchQuery, setSearchQuery] = useState('');
    const [hideZeroBalances, setHideZeroBalances] = useState(false);

    const cryptoData = [
      {
          symbol: Svgs.bitcoin,
          coin: 'BTC',
          coinName: 'bitcoin',
          amount:'10.0000000',
      },
      {
        symbol: Svgs.bitcoin,
        coin: 'BTC',
        coinName: 'bitcoin',
        amount:'0.00',
      },
      {
        symbol: Svgs.bitcoin,
        coin: 'BTC',
        coinName: 'bitcoin',
        amount:'10.00',
      },
      {
        symbol: Svgs.bitcoin,
        coin: 'BTC',
        coinName: 'bitcoin',
        amount:'10.00',
      }];
const handlePaymentClick = () =>{
  navigation.navigate('DepositHistoryScreen');
}
const filteredCryptoData = 
      hideZeroBalances ? cryptoData.filter(item => item.amount.split(' ')[0] !== '0' && item.amount.split(' ')[0] !== '0.00') : cryptoData;
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
            <TouchableOpacity style={styles.cancel} onPress={()=>{}}>
                <Text style={{fontSize:15}}>Cancel</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox 
                value={hideZeroBalances}
                onValueChange={(newValue) => setHideZeroBalances(newValue)}
            /> 
            <Text style={styles.checkboxLabel}>Hide zero balances</Text>
        </View>
        {filteredCryptoData.map((crypto, index) =>
          <TouchableOpacity key={`${crypto.coinName}+${index}`} style={styles.cryptoCoinContainer} onPress={handlePaymentClick}>
            <SvgFromXml width={30} height={30} xml={crypto.symbol} />
            <Text style={{fontSize:20, paddingHorizontal:10, color:'#000000'}}>{crypto.coin}</Text>
            <Text style={{fontSize:15, paddingHorizontal:10, color:'#696F8C'}}>{crypto.coinName}</Text>
            <Text style={{fontSize:15, marginLeft:'30%', paddingRight:30,fontWeight:'bold', color:'#000000',flexWrap:'wrap', flex:1}}>{crypto.amount}</Text>
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
  checkboxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:30,
    marginTop:30,
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
    marginLeft:30,
    alignItems: 'flex-start',
    marginTop:40,
    marginBottom:-25,
    flexWrap:'wrap'
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#8c93ab',
    marginLeft:10
  },
});

export default Withdraw;