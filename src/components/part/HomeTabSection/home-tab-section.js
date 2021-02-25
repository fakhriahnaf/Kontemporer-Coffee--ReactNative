import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {DummyProduct1, DummyProduct2, DummyProduct3} from '../../../assets';
import {ItemListProduct} from '../../combined/combined';
import {Rating} from '../part';
import {useNavigation} from '@react-navigation/native'

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
  const navigation= useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListProduct image={DummyProduct1} onPress={() => navigation.navigate('ProductDetail')}/>
      <ItemListProduct image={DummyProduct2} onPress={() => navigation.navigate('ProductDetail')}/>
      <ItemListProduct image={DummyProduct3} onPress={() => navigation.navigate('ProductDetail')}/>
      <ItemListProduct image={DummyProduct1} onPress={() => navigation.navigate('ProductDetail')}/>
      <ItemListProduct image={DummyProduct2} onPress={() => navigation.navigate('ProductDetail')}/>
      <ItemListProduct image={DummyProduct3} onPress={() => navigation.navigate('ProductDetail')}/>
    </View>
  );
};
const NonCoffee = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListProduct image={DummyProduct1} onPress={() => navigation.navigate('ProductDetail')}/>
      <ItemListProduct image={DummyProduct2} onPress={() => navigation.navigate('ProductDetail')}/>
    </View>
  );
};

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081', flex: 1}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7', flex: 1}]} />
);

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
    3: FirstRoute,
    4: FirstRoute,
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
