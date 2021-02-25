import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Rating } from '../../part/part';

const ItemListProduct = ({image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.container}>
      <Image source={image} style={styles.productImage} />
      <View style={{flex: 1}}>
        <Text style={styles.productName}>Es Kopi Susu</Text>
        <Text style={styles.price}>IDR 18.000</Text>
      </View>
      <Rating/>
    </View>
    </TouchableOpacity>
  );
};

export default ItemListProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
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
  price: {fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8D92A3'},
});
