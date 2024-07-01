import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';

const DepositDetails = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {

    const handleExplorerClick = () => {
        navigation.navigate('TraceLostDepositScreen');
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <SvgFromXml width={20} height={20} xml={Svgs.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Deposit Details</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.labelText}>Quantity</Text>
        <Text style={styles.amountText}>5000.00 USDT</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <SvgFromXml width={18} height={18} fill={'green'} xml={Svgs.successTick} />
            <Text style={styles.statusText}>Succeeded</Text>
        </View>
      </View>
      <View style={{marginTop:-20}}>
        <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Deposit Account</Text>
            <Text style={styles.infoValue}>Spot Account</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Chain Type</Text>
            <Text style={styles.infoValue}>BEP20</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Time</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.infoValue}>2024-05-14 05:05:32</Text>
            </View>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Deposit Address</Text>
            <View style={styles.addressContainer}>
            <Text style={[styles.infoValue, {flex:1, flexWrap:'wrap', marginLeft:90}]}>0x2CDF5F2f91453B50E97EBE064D92E8B54a2685cc</Text>
                <TouchableOpacity>
                <SvgFromXml width={30} height={30} style={{marginTop:30,}} xml={Svgs.copy} />
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <TouchableOpacity style={styles.explorerButton} onPress={handleExplorerClick}>
        <Text style={styles.explorerButtonText}>View On Explorer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    marginLeft:20,
  },
  headerText: {
    fontSize: 24,
    color:'#000000',
    marginRight:'30%'
  },
  detailContainer: {
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 15,
    borderColor: '#D9D9D9',
    paddingBottom:20
  },
  labelText: {
    fontSize: 15,
    color: '#696F8C',
    padding:10
  },
  amountText: {
    fontSize: 32,
    fontWeight: '400',
    color:'#000000'
  },
  statusText: {
    fontSize: 16,
    color: 'green',
    paddingHorizontal:5
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal:20,
  },
  infoLabel: {
    fontSize: 15,
    color: '#696F8C',
  },
  infoValue: {
    fontSize: 15,
    color: '#000000',
  },
  addressContainer:{ 
    flexDirection: 'row',
    flex: 1, 
    flexWrap: 'wrap', 
    alignItems: 'center' 
},
  explorerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: '80%',
  },
  explorerButtonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default DepositDetails;
