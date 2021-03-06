import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {DummyProduct1, DummyProduct2, DummyProduct3} from '../../../assets';
import {ItemListProduct} from '../../combined/combined';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDataByTypes } from '../../../redux/action/home';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{borderColor: 'black', width: 105}}
    renderLabel={({route, focused}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Coffee = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {coffee} = useSelector((state) => state.homeReducer);

  useDispatch(()=> {
    dispatch(getProductDataByTypes('coffee'))
  })
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {coffee.map((item) => {
        return (<ItemListProduct
        key={item.id}
        image={{uri: item.picturePath}}
        type='product'
        name={item.name}
        price={item.price}
        rating={item.rate}
        onPress={() => navigation.navigate('ProductDetail')}
      />)
      })}  
    </View>
  );
};
const NonCoffee = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {non_coffee} = useSelector((state) => state.homeReducer)

  useDispatch(()=> {
    dispatch(getProductDataByTypes('non_coffee'))
  })
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {non_coffee.map((item) => {
        return (<ItemListProduct
        key={item.id}
        image={{uri: item.picturePath}}
        type='product'
        name={item.name}
        price={item.price}
        rating={item.rate}
        onPress={() => navigation.navigate('ProductDetail')}
      />)
      })}  
    </View>
  );
};
const Food = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer)

  useDispatch(()=> {
    dispatch(getProductDataByTypes('food'))
  })
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {food.map((item) => {
        return (<ItemListProduct
        key={item.id}
        image={{uri: item.picturePath}}
        type='product'
        name={item.name}
        price={item.price}
        rating={item.rate}
        onPress={() => navigation.navigate('ProductDetail')}
      />)
      })}  
    </View>
  );
};
const Beans = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {beans} = useSelector((state) => state.homeReducer)

  useDispatch(()=> {
    dispatch(getProductDataByTypes('beans'))
  })
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {beans.map((item) => {
        return (<ItemListProduct
        key={item.id}
        image={{uri: item.picturePath}}
        type='product'
        name={item.name}
        price={item.price}
        rating={item.rate}
        onPress={() => navigation.navigate('ProductDetail')}
      />)
      })}  
    </View>
  );
};



const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Coffee'},
    {key: '2', title: 'Non-Coffee'},
    {key: '3', title: 'Food'},
    {key: '4', title: 'Beans'},
  ]);

  const renderScene = SceneMap({
    1: Coffee,
    2: NonCoffee,
    3: Food,
    4: Beans,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
