import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyProduct1, IcStarOn } from '../../../assets';
import { Gap, Rating } from '../../part/part';

const ProductCard = ({image, title}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.photo} source={image}/>
            <View style={styles.content}>
            <Text style={styles.text}>{title}</Text>
            <Gap height={8}/>
            <Rating/>
            </View>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    container:{
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        borderRadius: 8,
        overflow:'hidden',
        marginRight: 24,
    },
    text: {
        fontSize:16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    photo: {
        width: 200,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 8,
    },
   
    content: {
        padding: 12,
    },
});
