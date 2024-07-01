import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, BackHandler, Modal } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from '@react-native-community/checkbox';


const Wallet = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {

    const [activeTab, setActiveTab] = useState('Crypto');
    const [activeScreen, setActiveScreen] = useState('Account');
    const [currency, setCurrency] = useState('USD');
    const [hideZeroBalances, setHideZeroBalances] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);


    const cryptoData = [
        {
            name: 'USDT',
            info: 'Tether USDT',
            value: '20,000.00',
            change: '3.00 USD',
            icon: Svgs.usdt
        },
        {
            name: 'BTC',
            info: 'Bitcoin',
            value: '0.00',
            change: '5.00 USD',
            icon: Svgs.bitcoin
        },
        {
            name: 'ETH',
            info: 'Ethereum',
            value: '20,000.00',
            change: '3.00 USD',
            icon: Svgs.ethereum
        },
        {
            name: 'XRP',
            info: 'Ripple',
            value: '20,000.00',
            change: '3.00 USD',
            icon: Svgs.xrp
        }
    ];
  
    const fiatData = [
      {
        name: 'USD',
        info: 'United State Dollar',
        value: '1000.00',
        change: '0.50 USD',
        icon: Svgs.usdt
      },
      {
        name: 'EUR',
        info: 'EURO Dollar',
        value: '0.00',
        change: '0.30 USD',
        icon: Svgs.xrp
      },
      {
        name: 'INR',
        info: 'Indian Rupee',
        value: '960.00',
        change: '0.30 USD',
        icon: Svgs.usdt
      }
    ];
    const currencyArray = [{
        "accountType":"Spot",
        "currencyAmount":100.00,
        "currencyType":"USD"
      },
      {
        "accountType":"P2P",
        "currencyAmount":100.00,
        "currencyType":"USD"
      },
      {
        "accountType":"Staking",
        "currencyAmount":100.00,
        "currencyType":"USD"
      },
      {
        "accountType":"Piggy",
        "currencyAmount":100.00,
        "currencyType":"USD"
      }];

      useEffect(() => {
        const backAction = () => {
          if (activeScreen !== 'Account') {
            setActiveScreen('Account');
            return true;
          }
          return false;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
      }, [activeScreen]);

      const handlePress = (account: any) => {
        setActiveScreen(account);
      };

      const handleDepositPress = () => {
        setModalVisible(true);
      }
      
      const handleBuyWithFiatPress = () => {
        setModalVisible(false);
        navigation?.navigate('BuyWithFiatScreen');
      };

      const handleDepositCryptoPress = () => {
        setModalVisible(false);
        navigation?.navigate('DepositCryptoScreen');
      };

      const handleWithdrawClick = () => {
        navigation?.navigate('ConfirmWithdrawScreen');
      }
      
      const filteredCryptoData = 
      hideZeroBalances ? cryptoData.filter(item => item.value.split(' ')[0] !== '0' && item.value.split(' ')[0] !== '0.00') : (searchQuery)? cryptoData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) : cryptoData;

      const filteredFiatData = hideZeroBalances ? fiatData.filter(item => item.value.split(' ')[0] !== '0' && item.value.split(' ')[0] !== '0.00') : (searchQuery)? fiatData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) : fiatData;
  
      const renderList = (data: any) => {
        return data.map((item: any, index: any) => (
            <View style={styles.listItem} key={`${item.name}-${index}`}>
                <View style={styles.cryptoInfo}>
                    <SvgFromXml width={20} height={20} style={{ marginRight: 15 }} xml={item.icon} />
                    <View style={styles.cryptoDetails}>
                        <Text style={styles.cryptoName}>{item.name}</Text>
                        <Text style={styles.cryptoCurrencyInfo}>{item.info}</Text>
                    </View>
                </View>
                <View style={styles.cryptoValueContainer}>
                    <Text style={styles.cryptoValue}>{item.value}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SvgFromXml width={10} height={10} xml={Svgs.approxEquals} />
                        <Text style={styles.cryptoChangePositive}>{item.change}</Text>
                    </View>
                </View>
            </View>
        ));
    };
    

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
    <ScrollView contentContainerStyle={styles.container}>
    <View style={{padding: 16,}}>
      <Text style={styles.title}>My Assets</Text>
      <View style={styles.totalValueContainer}>
        <Text style={styles.totalValueTitle}>Total Value <Image
        source={require('../../../../assets/images/eyeopen.png')}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
        resizeMode="contain"
      /></Text>
      <View style={{flexDirection:'row'}}>
            <Text style={styles.totalValueAmount}>100,000.00 </Text>
            <RNPickerSelect
        onValueChange={(value) => setCurrency(value)}
        items={[
          { label: 'USD', value: 'USD' },
          { label: 'INR', value: 'INR' },
          { label: 'EUR', value: 'EUR' },
        ]}
        placeholder={{}}
        style={pickerSelectStyles}
        value={currency}
        useNativeAndroidPickerStyle={false}
        Icon={() =><SvgFromXml style={{paddingTop:50}} xml={Svgs.dropdownArrow} />}
      />
        </View>
        <Text style={styles.btcValue}>~ 0.701429479124 BTC</Text>
        <Text style={styles.pnl}>Todays PNL</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.pnlAmount}>+ 100.21334 USD</Text> 
            <Text style={styles.pnlPercentage}> + 10.00 %</Text>
        </View>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={(handleDepositPress)}>
            <SvgFromXml xml={Svgs.deposit} />
            <Text style={styles.actionText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleWithdrawClick}>
            <SvgFromXml xml={Svgs.withdraw} />
            <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <SvgFromXml xml={Svgs.transfer} />
            <Text style={styles.actionText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <SvgFromXml xml={Svgs.connect} />
            <Text style={styles.actionText}>Convert</Text>
        </TouchableOpacity>
      </View>
        {activeScreen === 'Account' && 
        (<>
      <Text style={styles.accountsTitle}>My Accounts</Text>
      {currencyArray?.map((item, index) =>
    <TouchableOpacity key={`${item.accountType}-${index}`} onPress={() => handlePress(item.accountType)}>
        <View style={styles.accountContainer}>
            <View>
                <Text style={styles.accountType}>{item.accountType}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.currencyStyle}>{item.currencyAmount}</Text>
                    <Text style={styles.currencyTypeStyle}>{` ${item.currencyType}`}</Text>
                </View>
            </View>
            <SvgFromXml fill="#696F8C" width={20} height={20} xml={Svgs.rightArrow} />
        </View>
    </TouchableOpacity>
)}

      </>)}
      </View>
      {activeScreen !== 'Account' && 
      (
    <View style={{backgroundColor:'#FFFFFF', paddingLeft: 20, paddingTop:5, marginTop:-10}}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('Crypto')}>
          <Text style={activeTab === 'Crypto' ? styles.tabActive : styles.tab}>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Fiat')}>
          <Text style={activeTab === 'Fiat' ? styles.tabActive : styles.tab}>Fiat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.searchContainer}>
        <View style={{flexDirection:'row', alignItems:'center', marginLeft:-5}}>
            <CheckBox 
                value={hideZeroBalances}
                onValueChange={(newValue) => setHideZeroBalances(newValue)}
            />    
            <Text style={styles.checkboxLabel}>Hide zero balances</Text>
        </View>
        <View style={styles.searchInput}>
            <SvgFromXml xml={Svgs.search}/>
            <TextInput style={{fontSize:15}} placeholder="Search" 
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)} />
        </View>
      </View>
      
        <View style={styles.listContainer}>
            {activeTab === 'Crypto' ? renderList(filteredCryptoData) : renderList(filteredFiatData)}
        </View>
      </View>)}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleView}>
                <Text style={styles.modalTitle} >Select Payment method</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <SvgFromXml xml={Svgs.closeButton} />
                </TouchableOpacity>
              
            </View>
            <Text style={styles.modalSubtitle}>Buy with fiat</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleBuyWithFiatPress}>
              <View style={{flexDirection:'row', alignItems:'center', width:'100%'}}>
                {/* <View> */}
                  <SvgFromXml xml={Svgs.buyFiat} />
                {/* </View> */}
                <View style={{marginLeft:'20%'}}>
                  <Text style={styles.modalButtonText}>Buy with FIAT</Text>
                  <Text style={styles.modalButtonSubtext}>
                    Visa, Mastercard and JCB Supported
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
            <View style={{flexDirection:'row', alignItems:'center', width:'100%'}}>
                <SvgFromXml xml={Svgs.buyP2P} />
                  <View style={{marginLeft:'17%'}}>
                    <Text style={styles.modalButtonText}>P2P Trading</Text>
                    <Text style={styles.modalButtonSubtext}>
                      0 Fees, Bank Transfer and more
                    </Text>
                  </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.modalSubtitle}>Deposit with Crypto</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleDepositCryptoPress}>
            <View style={{flexDirection:'row', alignItems:'center', width:'100%'}}>
              <SvgFromXml xml={Svgs.depositCrypto} />
                <View style={{marginLeft:'20%'}}>
                  <Text style={styles.modalButtonText}>Deposit Crypto</Text>
                  <Text style={styles.modalButtonSubtext}>
                    Already have crypto? Deposit directly
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
    </>
  );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 15,
        color: '#35383F',
        paddingRight: 15,
    },
    inputAndroid: {
      fontSize: 15,
      color: '#35383F',
      paddingRight: 15,
    },
  });

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#11183C',
    marginBottom: 16,
    paddingTop:28,
    paddingBottom:28,
  },
  totalValueContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 22,
  },
  totalValueTitle: {
    fontSize: 15,
    color: '#A0A4A8',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalValueAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E253A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btcValue: {
    fontSize: 14,
    color: '#A0A4A8',
    marginBottom: 8,
  },
  pnl: {
    fontSize: 15,
    color: '#696F8C',
  },
  pnlAmount: {
    fontSize:15,
    fontWeight: 'bold',
    color: '#000000',
  },
  pnlPercentage: {
    fontSize:15,
    color: '#098C26',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    alignItems: 'center',
    width: 68,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 12,
  },
  actionText: {
    fontSize: 10,
    color: '#1E253A',
  },
  accountsTitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000000',
    marginBottom: 8,
  },
  accountContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 8,
    paddingLeft:16,
    paddingRight:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  accountType: {
    fontSize: 12,
    color: '#696F8C',
  },
  currencyTypeStyle: {
    fontSize: 12,
    color: '#000000',
  },
  currencyStyle:{
    fontSize: 20,
    color: '#35383F',
    fontWeight:'bold'
  },
// -------------------------------------------------
tabs: {
    flexDirection: 'row',
    marginTop: 16,
  },
  tab: {
    fontSize: 14,
    color: '#8c93ab',
    marginRight: 16,
  },
  tabActive: {
    fontSize: 14,
    color: '#1e2139',
    marginRight: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#1e2139',
  },
  horizontalLine: {
    borderTopColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginLeft:'-20%'
  },
//   -------------------------------------------------

searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'space-between',
    marginRight: 16,
  },
checkboxLabel: {
    fontSize: 14,
    color: '#8c93ab',
    marginLeft:10
},
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    height: 40,
    borderColor: '#dcdce5',
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: 16,
    backgroundColor: '#D7D9E4',
  },

//   ------------------------------------------------------------
  listContainer: {
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginRight: 16,
    paddingTop: 5,
  },
  cryptoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoDetails: {
    justifyContent: 'center',
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  cryptoCurrencyInfo: {
    fontSize: 12,
    color: '#696F8C',
  },
  cryptoValueContainer: {
    alignItems: 'flex-end',
  },
  cryptoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e2139',
  },
  cryptoChangePositive: {
    fontSize: 12,
    color: '#696F8C',
  },
// -----------------------------------------------------------

modalOverlay: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  closeButton: {
    paddingLeft: '42%',
    paddingBottom: 10,
  },
  modalTitleView: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between', 
    borderBottomWidth:0.4,
    paddingHorizontal:20
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
  },
  modalSubtitle: {
    fontSize: 20,
    color: "#696F8C",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  modalButton: {
    width: "100%",
    backgroundColor: "#B4D5EFE5",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    marginBottom: 15
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  modalButtonSubtext: {
    fontSize: 12,
    color: "#696F8C",
    marginTop: 5,
  },
});

export default Wallet;
