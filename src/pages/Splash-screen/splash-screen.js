import React , {useEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets/illustration';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000);
    }, []);
    
    return (
        <View style={{
            backgroundColor:'#bd9354',
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
            }}>
            <View>
            <Logo />
            </View>
            <View style={{height: 38}}/>
            <Text style={{fontSize:32, color: '#020202', fontFamily:'Poppins-Medium', fontSize: 20}}>Kopi Konco</Text>
        </View>
    );
}

export default SplashScreen;
