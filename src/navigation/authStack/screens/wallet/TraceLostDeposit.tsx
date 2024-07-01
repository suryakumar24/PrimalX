import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { SvgFromXml } from 'react-native-svg';
import Svgs from '../../../../assets/Svgs';

const TraceLostDeposit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <SvgFromXml width={20} height={20} xml={Svgs.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Trace Lost Deposit</Text>
      </View>
      <Text style={styles.questionText}>Didn't the deposited amount arrive?</Text>
      <View style={{paddingHorizontal:20}}>
        <Text style={{color:'#696F8C', fontSize:15}}>Enter Transaction Hash</Text>
        <TextInput style={styles.input} placeholderTextColor="#A4A4A4" />
      </View>
      <TouchableOpacity style={styles.traceButton}>
        <Text style={styles.traceButtonText}>Trace</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>
        If you have deposit and did not credited in your account, use this option to trace and credit your deposit in your account
      </Text>
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
    marginRight:'25%'
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
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft:'55%',
    marginRight:20
  },
  traceButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal:20
  },
  infoText: {
    fontSize: 15,
    marginTop: 50,
    paddingLeft:20,
    paddingRight:12,
    color: '#000000',
  },
});

export default TraceLostDeposit;
