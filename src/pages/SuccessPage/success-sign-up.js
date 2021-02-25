import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSucessSignUp } from '../../assets/illustration'
import { Button, Gap } from '../../components'

const SucessSignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSucessSignUp/>
            <Text style={styles.title}>Yeay! Completed</Text>
            <Text style={styles.subtitle}>Now you are able to order</Text>
            <Text style={styles.subtitle}>some order as a self hearning</Text>
            <Gap height={60}/>
            <View style={styles.buttonContainer}>
                <Button text='Find the origin' onPress={() => navigation.replace('MainApp')}/>
            </View>
        </View>
    )
}

export default SucessSignUp;

const styles = StyleSheet.create({
    page: {
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title :{
        fontSize: 20,
        fontFamily: 'Poppins-Regular', 
        color: '#020202',
    },
    subtitle : {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color:'#8D92A3',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80,
    }
})
