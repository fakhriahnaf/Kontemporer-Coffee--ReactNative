import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Rating } from '../../part/part';

const ItemListProduct = ({image, onPress, items, rating}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.container}>
      <Image source={image} style={styles.productImage} />
      <View style={{flex: 1}}>
        <Text style={styles.productName}>Es Kopi Susu</Text>
        <Text style={styles.price}>IDR 18.000</Text>
      </View>
      {/* untuk menampilkan items, atau rating */}
      
      {items && !rating && <Text style={styles.items}>{items} items</Text>} 
      {rating && !items && <Rating/>}
    </View>
    </TouchableOpacity>
  );
};

export default ItemListProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    //paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  productName: {fontFamily: 'Poppins-Medium', fontSize: 17, color: '#020202'},
  price: {
    fontFamily: 'Poppins-Regular', 
    fontSize: 13, 
    color: '#8D92A3'
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },

});
