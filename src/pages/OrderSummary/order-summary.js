import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ItemListProduct} from '../../components/combined/combined';
import Header from '../../components/combined/Header/header';
import ItemValue from '../../components/part/ItemValue/item-value';
import {Button, Loading} from '../../components/part/part';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  const onCheckout = () => {
    const data = {
      product_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch((err) => {
          showMessage(
            `${err?.response?.data?.message} on Checkout API` ||
              'Terjadi Kesalahan di API Checkout',
          );
        });
    });
  };

  const onNavChange = (state) => {
    // TODO: Use This For Production
    // const urlSuccess =
    //   'http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=574&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };
  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subtitle="Silahkan bayar sesuai dengan tagihan"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          onNavigationStateChange={onNavChange}
          renderLoading={()=> <Loading/>}
          style={{marginTop: 20}}
        />
      </>
    );
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
        <Button text={'Checkout Now'} onPress={onCheckout} />
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
