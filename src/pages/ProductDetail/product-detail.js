import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {DummyProduct3, IcBackWhite} from '../../assets';
import {Button, Gap, Rating} from '../../components';
import Counter from '../../components/part/Counter/counter';

const ProductDetail = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyProduct3} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.productDetailHeader}>
            <View>
              <Text style={styles.title}>Es Kopi Kental Manis</Text>
              <Gap height={8} />
              <Rating />
            </View>
            <Counter/>
          </View>
          <Text style={styles.desc}>
            Es kopi susu kekinian (kadang disebut es kopi susu gula aren) adalah
            istilah untuk mencakup jenis racikan kopi yang mengandung susu dan
            gula aren. Racikan ini umumnya disajikan dingin dengan es dalam
            kemasan gelas plastik bertutup.
          </Text>
          <Gap height={20}/>
          <Text style={styles.label}>Ingredients and Spesification</Text>
          <Text style={styles.desc}>arabica 50:50, beans bogor</Text>
        </View>
        <View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.totalPrice}>IDR 12.000</Text>
            </View>
            <View style={styles.button}>
            <Button text={'Checkout'}/>
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
  }

});
