import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcNext } from '../../../assets'

const ItemListMenu = ({text, onPress}) => {
    return (

    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <IcNext/>
        </View>
    </TouchableOpacity>
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
