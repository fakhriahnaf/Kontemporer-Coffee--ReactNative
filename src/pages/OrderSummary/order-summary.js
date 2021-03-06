import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyProduct1} from '../../assets';
import {ItemListProduct} from '../../components/combined/combined';
import Header from '../../components/combined/Header/header';
import ItemValue from '../../components/part/ItemValue/item-value';
import {Button} from '../../components/part/part';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;

  const onCheckout = () => {
    const data = {
      product_id: item.id,
      user_id: userProfile,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    }
    navigation.replace('SuccessOrder')
  }
  return (
    <View style={{flex: 1}}>
      <Header
        title="Payment"
        subtitle="Bayar dan nikmati secangkir kopimu"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Item Ordered</Text>
        <ItemListProduct
          image={{uri: item.picturePath}}
          items={transaction.totalItem}
          type="order-summary"
          name={item.name}
          price={item.price}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label={item.name} value={transaction.totalPrice} />
        <ItemValue label="Ongkir" value={transaction.ongkir} />
        <ItemValue label="Tax 2.5%" value={transaction.tax} />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1AbC9c"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to: </Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="Postal code" value={userProfile.portalCode} />
        <ItemValue label="Kecamatan" value={userProfile.kecamatan_area} />
      </View>
      <View style={styles.button}>
        <Button
          text={'Checkout Now'}
          onPress={onCheckout}
        />
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
