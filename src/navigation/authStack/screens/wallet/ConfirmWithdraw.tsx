import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';

const ConfirmWithdraw = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
        onPress={() => {
            navigation.goBack();
          }}>
            <SvgFromXml width={20} height={20} xml={Svgs.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Confirm</Text>
      </View>
      <View style={{paddingHorizontal:20}}>
        <Text style={{color:'#696F8C', fontSize:15}}>Fund Password</Text>
        <TextInput style={styles.input} placeholder='Enter Fund Password' placeholderTextColor="#A4A4A4" />
        <Text style={{alignSelf:'flex-end', marginTop:-10}}>Forgot</Text>
      </View>
      <View style={{paddingHorizontal:20}}>
        <Text style={{color:'#696F8C', fontSize:15}}>OTP Sent to Your Email</Text>
        <TextInput style={styles.input} placeholder='Enter OTP' placeholderTextColor="#A4A4A4" />
      </View>
      <View style={{paddingHorizontal:20}}>
        <Text style={{color:'#696F8C', fontSize:15}}>OTP Sent to Your Mobile</Text>
        <TextInput style={styles.input} placeholder='Enter OTP' placeholderTextColor="#A4A4A4" />
      </View>
      <TouchableOpacity style={styles.traceButton}>
        <Text style={styles.traceButtonText}>Confirm</Text>
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
    marginRight:'40%'
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    padding:20,
    color:'#000000',
  },
  input: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#D9D9D9'
  },
  traceButton: {
    width:'90%',
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:'110%'
  },
  traceButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default ConfirmWithdraw;
