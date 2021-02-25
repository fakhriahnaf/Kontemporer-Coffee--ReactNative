import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components';

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={'Sign In'} subtitle={'Just for login'}/>
            <View style={styles.container}>
                <TextInput label={'Email Address'} placeholder={'Type your Email Address'}/>
                <Gap height={16}/>
                <TextInput label={'Password'} placeholder={'Type your password'}/>
                <Gap height={40}/>
                <Button text='Sign In' onPress={()=> navigation.navigate('MainApp')}/>
                <Gap height={16}/>
                <Button text='Create a new account' color='#8D92A3' textColor='white' onPress={() => navigation.navigate('SignUp')}/>
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop:24,
        flex: 1,
    },
})
