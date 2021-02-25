import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import {
  DummyProduct1,
  DummyProduct2,
  DummyProduct3,
  ProfileDummy,
} from '../../assets';
import {Gap, HomeHeader, HomeTabSection, ProductCard} from '../../components';


const Home = () => {
  return (
    <View style={styles.page}>
     <HomeHeader/>
     <ScrollView>
      <View>
      <ScrollView horizontal showsHorizontalScrollIndicator="false">
        <View style={styles.productCardContainer}>
          <Gap width={24} />
          <ProductCard image={DummyProduct1} title={'Es Kopi Kental Manis'} />
          <ProductCard image={DummyProduct2} title={'Es Mochachino'} />
          <ProductCard image={DummyProduct3} title={'Latte Dingin'} />
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
