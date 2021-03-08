import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {DummyProduct1, DummyProduct2, DummyProduct3} from '../../../assets';
import {ItemListProduct} from '../../combined/combined';
import {useNavigation} from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {inProgress.map((order) => {
        return (
          <ItemListProduct
            key={order.id}
            name={order.product.name}
            image={{uri: order.product.picturePath}}
            onPress={() => navigation.navigate('OrderDetail')}
            type="in-progress"
            items={order.quantity}
            price={order.total}
          />
        );
      })}
    </View>
  );
};
const PastOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getPastOrders());
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrders.map((order) => {
        return (
          <ItemListProduct
            key={order.id}
            image={{uri: order.product.picturePath }}
            name={order.product.name}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            onPress={() => navigation.navigate('ProductDetail')}
            status={order.status}
            date={order.created_at}
          />
        );
      })}
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
