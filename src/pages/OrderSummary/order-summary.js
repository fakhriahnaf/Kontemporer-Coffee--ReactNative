import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyProduct1} from '../../assets';
import {ItemListProduct} from '../../components/combined/combined';
import Header from '../../components/combined/Header/header';
import ItemValue from '../../components/part/ItemValue/item-value';
import {Button} from '../../components/part/part';

const OrderSummary = () => {
  return (
    <View style={{flex:1}}>
      <Header
        title="Payment"
        subtitle="Bayar dan nikmati secangkir kopimu"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Item Ordered</Text>
        <ItemListProduct image={DummyProduct1} items={2} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Es Kopi Kental Manis" value="IDR 12.000" />
        <ItemValue label="Ongkir" value="IDR 3.000" />
        <ItemValue label="Tax 2.5%" value="IDR 300" />
        <ItemValue label="Total Price" value="IDR 15.300" />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to: </Text>
        <ItemValue label="Name" value="Haris Martin" />
        <ItemValue label="Phone No." value="0812332221" />
        <ItemValue label="Address" value="Bogor Valley kamar 1702" />
        <ItemValue label="Postal code" value="16164" />
        <ItemValue label="Kecamatan" value="Tanah Sareal" />
      </View>
      <View style={styles.button}>
        <Button text={'Checkout Now'} />
      </View>
    </View>
    
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 34,
  },

});
