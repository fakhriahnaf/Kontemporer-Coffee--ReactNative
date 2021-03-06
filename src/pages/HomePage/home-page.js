import React, { useEffect } from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Gap, HomeHeader, HomeTabSection, ProductCard} from '../../components';
import {getProductData} from '../../redux/action/home';


const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {product} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getProductData());
  }, []);
  return (
    <View style={styles.page}>
     <HomeHeader/>
     <ScrollView>
      <View>
      <ScrollView horizontal showsHorizontalScrollIndicator="false">
        <View style={styles.productCardContainer}>
          <Gap width={24} />
          {product.map((itemProduct)=>{
            return (
              <ProductCard
                    key={itemProduct.id}
                    title={itemProduct.name}
                    image={{uri: itemProduct.picturePath}}
                    rating={itemProduct.rate}
                    onPress={() => navigation.navigate('ProductDetail', itemProduct)}
                  />
            )
          })}
        </View>
      </ScrollView>
      </View>
      <Gap height={20}/>
      <View style={styles.tabContainer}>
      <HomeTabSection/>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page:{flex: 1,},
  productCardContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer:{
      flex:1
  }
});
