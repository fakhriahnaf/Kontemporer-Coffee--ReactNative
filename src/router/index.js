import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, SignIn, SignUp, SignUpContinue, SucessSignUp, Home, Order, Profile, ProductDetail, OrderSummary} from '../pages';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Order' component={Order}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name='SignUpContinue' component={SignUpContinue} options={{headerShown: false}}/>
            <Stack.Screen name='SuccessSignUp' component={SucessSignUp} options={{headerShown: false}}/>
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown: false}}/>
            <Stack.Screen name='OrderSummary' component={OrderSummary} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default Router;

const styles = StyleSheet.create({})
