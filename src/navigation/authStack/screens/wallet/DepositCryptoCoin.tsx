import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, LogBox } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';
import ModalDropdown from 'react-native-modal-dropdown';
import RNPickerSelect from 'react-native-picker-select';


const DepositCryptoCoin = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  
  const dropdownItems = [
    {
      label: (
        <View style={styles.dropdownItem}>
          <SvgFromXml width={30} height={30} xml={Svgs.bitcoin} />
          <Text style={styles.currencyCode}>BTC</Text>
          <Text style={styles.currencyName}>Bitcoin</Text>
        </View>
      ),
      value: 'BTC',
    },
    {
      label: (
        <View style={styles.dropdownItem}>
          <SvgFromXml width={30} height={30} xml={Svgs.bitcoin} />
          <Text style={styles.currencyCode}>USD</Text>
          <Text style={styles.currencyName}>Dollar</Text>
        </View>
      ),
      value: 'USD',
    },
    {
      label: (
        <View style={styles.dropdownItem}>
          <SvgFromXml width={30} height={30} xml={Svgs.bitcoin} />
          <Text style={styles.currencyCode}>EUR</Text>
          <Text style={styles.currencyName}>Euro</Text>
        </View>
      ),
      value: 'EUR',
    },
  ];
  const networkArray = [
    { label: 'Select Network', value: 'Select Network' },
    { label: 'Network1', value: 'Network1' },
    { label: 'Network2', value: 'Network2' },
    { label: 'Network3', value: 'Network3' },
  ];

  const [currency, setCurrency] = useState(dropdownItems[0].label);
  const [network, setNetwork] = useState();


  const renderDropdownItem = (option: any, index: any, isSelected: any) => {
    return (
      <View key={index} style={styles.dropdownItemContainer}>
        {option.label}
      </View>
    );
  };
  LogBox.ignoreAllLogs(true)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <SvgFromXml width={20} height={20} xml={Svgs.backArrow} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <SvgFromXml width={20} height={20} xml={Svgs.search} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgFromXml width={20} height={20} xml={Svgs.page} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignSelf: 'flex-start', paddingLeft: 20, paddingTop: 10 }}>
          <Text style={styles.navTitle}>Deposit</Text>
        </View>
        <Text style={{ color: '#696F8C', fontSize: 15, paddingLeft: 20, paddingBottom: 10, marginTop:20 }}>Coin</Text>
          <ModalDropdown
            options={dropdownItems}
            renderRow={renderDropdownItem}
            onSelect={(index: any) => setCurrency(dropdownItems[index].label)}
            style={styles.dropdown}
            dropdownStyle={styles.dropdownList}
            defaultIndex={0}
            saveScrollPosition={false}
          >
            <View style={styles.dropdownButton}>
              <Text style={styles.selectedText}>{currency}</Text>
              <SvgFromXml style={{marginRight:10}} xml={Svgs.dropdownArrow}/>
            </View>
          </ModalDropdown>

        <View style={styles.networkContainer}>
          <Text style={{ color: '#696F8C', fontSize: 15, paddingBottom: 10 }}>Network</Text>
            <RNPickerSelect
            onValueChange={(value) => setNetwork(value)}
            items={networkArray}
            placeholder={{}}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            Icon={() =><SvgFromXml style={{paddingTop:50, marginRight:18}} xml={Svgs.dropdownArrow} />}
          />
        </View>
        <Image
          source={require('../../../../assets/images/qrcode.png')}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <View style={styles.addressContainer}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.addressLabel}>Wallet Address</Text>
            <TouchableOpacity>
              <SvgFromXml width={30} height={30} style={{marginTop:-15,}} xml={Svgs.copy} />
            </TouchableOpacity>
          </View>
          <Text style={styles.addressText}>0x2...d142</Text>
        </View>
        <View style={styles.contractDetailsContainer}>
          <View style={styles.contractDetailsInnerContainer}>
            <Text style={styles.contractDetailsText}>Expected Arrival</Text>
            <Text style={[styles.contractDetailsText, {fontWeight:'bold'}]}>20 Confirmations</Text>
          </View>
          <View style={styles.contractDetailsInnerContainer}>
            <Text style={styles.contractDetailsText}>Contract Address</Text>
            <Text style={[styles.contractDetailsText, {fontWeight:'bold'}]}>Ends with 4274g147</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.buttonStyle, {backgroundColor:'#97D0F1'}]}>
            <Text style={styles.buttonText}>Save Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonStyle, {backgroundColor:'#428BC1'}]}>
            <Text style={styles.buttonText}>Copy Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 15,
      color: '#696F8C',
      paddingRight: 15,
      paddingLeft: 15,
    backgroundColor:'#D9D9D9'
  },
  inputAndroid: {
    fontSize: 15,
    color: '#696F8C',
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor:'#D9D9D9',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    marginTop: 30,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },
  navTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  dropdown: {
    width: '90%',
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor:'#D9D9D9',
    borderRadius: 4,
    alignSelf: 'center',
  },
  dropdownList: {
    width: '90%',
    // marginLeft: -20,
    borderRadius: 4,
    maxHeight: 150,
    backgroundColor:'#D9D9D9',
  },
  dropdownButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyCode: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#000000',
  },
  currencyName: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: '#696F8C',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    marginTop: 50,
  },
  addressContainer: {
    // alignItems: 'center',
    marginVertical: 16,
    marginHorizontal:15,
    paddingHorizontal:10,
    paddingTop:20,
    paddingBottom:15,
    backgroundColor:'#FFFFFF',

  },
  contractDetailsContainer: {
    alignItems: 'flex-start',
    marginHorizontal:15,
    paddingHorizontal:10,
    paddingBottom:10
  },
  contractDetailsInnerContainer:{
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contractDetailsText:{
    color:'#696F8C',
     fontSize:12
  },
  addressLabel: {
    fontSize: 20,
    color: '#696F8C',
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
  },
  buttonStyle: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    // marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize:18
  },
  networkContainer:{
    marginHorizontal:20,
    borderRadius:8,
    marginTop:10
  },
});

export default DepositCryptoCoin;
