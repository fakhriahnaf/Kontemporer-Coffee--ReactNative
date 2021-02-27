import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Rating} from '../../part/part';

const ItemListProduct = ({
  name,
  image,
  onPress,
  items,
  rating,
  totalOrder,
  price,
  type,
  date,
  status
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        //itemproduct
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating  rating={rating}/>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.price}>
                {' '}
                {items} items x IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.price}>
                {items} items x IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.productImage} />
        {renderContent()}
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
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  }
});
