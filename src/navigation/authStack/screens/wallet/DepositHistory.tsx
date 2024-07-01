import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';
import RNPickerSelect from 'react-native-picker-select';


const data = [
  { id: '1', coin: 'USDT', date: '2024-05-22 05:07:23', amount: '5000.00', status: 'Succeeded' },
  { id: '2', coin: 'USDT', date: '2024-05-22 05:07:23', amount: '5000.00', status: 'Succeeded' },
  { id: '3', coin: 'USDT', date: '2024-05-22 05:07:23', amount: '5000.00', status: 'Succeeded' },
  { id: '4', coin: 'USDT', date: '2024-05-22 05:07:23', amount: '5000.00', status: 'Succeeded' },
];
const coinArray = [
    { label: 'Coin', value: 'Coin' },
    { label: 'BTC', value: 'bitcoin' },
    { label: 'ETH', value: 'Ethereum' },
    { label: 'XRP', value: 'Ripple' },
  ];
const DepositHistory = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {
    const[coin, setCoin] = useState();

    const handleDepositHistoryClick = () => {
        navigation.navigate('DepositDetailsScreen');
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <SvgFromXml width={20} height={20} xml={Svgs.backArrow} />
            </TouchableOpacity>
        <Text style={styles.headerText}>Deposit History</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', borderBottomWidth:2, borderColor:'#D3D3D3'}}>
      <RNPickerSelect
            onValueChange={(value) => setCoin(value)}
            items={coinArray}
            placeholder={{}}
            // value={coin}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            Icon={() =><SvgFromXml width={15} height={15} style={{paddingTop:50}} xml={Svgs.dropdownArrow} />}
          />
          </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={handleDepositHistoryClick}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                <Text style={styles.listItemText}>{item.coin}</Text>
                <Text style={styles.listItemText}>{item.amount}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                <Text style={styles.listItemSubText}>{item.date}</Text>
                <Text style={styles.listItemSubText}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        color: '#696F8C',
        paddingRight:20,
        marginLeft:20
    },
    inputAndroid: {
      fontSize: 20,
      color: '#696F8C',
      paddingRight:20,
      marginLeft:20
    },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    marginTop:30
  },
  header: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 24,
    paddingBottom:20,
    marginLeft:20
  },
  headerText: {
    fontSize: 24,
    color:'#000000',
    marginRight:'30%'
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: '#A4A4A4',
  },
  listItem: {
    justifyContent: 'space-between',
    paddingVertical: 12,
    marginHorizontal:25
  },
  listItemText: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#000000',
  },
  listItemSubText: {
    fontSize: 12,
    color: '#000000',
  },
});

export default DepositHistory;
