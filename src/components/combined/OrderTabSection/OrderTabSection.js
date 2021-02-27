import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {DummyProduct1, DummyProduct2, DummyProduct3} from '../../../assets';
import {ItemListProduct} from '../../combined/combined';
import {useNavigation} from '@react-navigation/native';

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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListProduct
        name='Es Kopi Kental Manis'
        image={DummyProduct1}
        onPress={() => navigation.navigate('OrderDetail')}
        type='in-progress'
        items={3}
        price='12.000'
      />
      <ItemListProduct
        name='Capuchino ice'
        price='12.000'
        type='in-progress'
        items={2}
        image={DummyProduct2}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};
const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListProduct
        image={DummyProduct1}
        name='Es Kepal Milo'
        type='past-orders'
        items={3}
        price='20.000'
        onPress={() => navigation.navigate('ProductDetail')}
        status='Cancel'
        date='Jun 12, 14:00'
      />
      <ItemListProduct
        image={DummyProduct2}
        rating={3}
        type='past-orders'
        name='Capuchino Ice'
        price='20.000'
        onPress={() => navigation.navigate('ProductDetail')}
        status='Cancel'
        date='Jun 12, 14:00'
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'InProgress'},
    {key: '2', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
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

export default OrderTabSection;

const styles = StyleSheet.create({});
