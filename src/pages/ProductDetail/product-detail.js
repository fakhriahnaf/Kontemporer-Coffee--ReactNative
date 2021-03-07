import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {DummyProduct3, IcBackWhite} from '../../assets';
import {Button, Gap, Number, Rating} from '../../components';
import Counter from '../../components/part/Counter/counter';
import { getData } from '../../utils';

const ProductDetail = ({navigation, route}) => {
  const {name, picturePath, description, price, spesification, rate, id} = route.params;
  const [totalItem, secTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});
  
  useEffect(() => {
    getData('userProfile').then((res)=> {
      setUserProfile(res)
    })
  }, []);

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const ongkir = 3000;
    const tax = (2.5/100) *totalPrice;
    const total = totalPrice + ongkir + tax;

    const data ={
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem, 
        totalPrice,
        ongkir,
        tax,
        total,
      },
      userProfile,
    };
    console.log('data for chekout: ', data);
    navigation.navigate('OrderSummary', data)
  }

  const onCounterChange = (value) => {
    console.log('counter: ', value); 
    secTotalItem(value)
  }
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.productDetailHeader}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Gap height={8} />
              <Rating number={rate}/>
            </View>
            <Counter onValueChange={onCounterChange}/>
          </View>
          <Text style={styles.desc}>
            {description}
          </Text>
          <Gap height={20}/>
          <Text style={styles.label}>Ingredients and Spesification</Text>
          <Text style={styles.desc}>{spesification}</Text>
        </View>
        <View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number number={totalItem * price} style={styles.totalPrice}/>
            </View>
            <View style={styles.button}>
            <Button text={'Checkout'} onPress={onOrder}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 350,
    paddingTop: 45,
    paddingLeft: 26,
  },
  back: {
    backgroundColor: 'rgba(60,62,63,0.7)',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    opacity: 0.5,
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingTop: 36,
    paddingHorizontal: 25,
    flex: 1,
  },
  mainContent:{
    flex: 1,
    backgroundColor: 'white'
  },
  productDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 4,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer:{
      flexDirection: 'row',
      justifyContent:'space-between',
      paddingVertical: 16,
      //backgroundColor: 'yellow',
  },
  priceContainer: {
      flex:1,
      paddingBottom: 20,
  },
  button :{
      width: 163
  },
  labelTotal: {
      fontSize: 13,
      fontFamily: 'Poppins-Regular',
      color: '#8D92A3',
  },
  totalPrice: {
      fontSize: 17, 
      fontFamily:'Poppins-Regular', 
      color: '#020202',
  },


});
