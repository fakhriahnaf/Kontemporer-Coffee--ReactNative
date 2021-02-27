import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcNext } from '../../../assets'

const ItemListMenu = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <IcNext/>
        </View>
    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e3e1e1'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color:'#020202',

    }
})
