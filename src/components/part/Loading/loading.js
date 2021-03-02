import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#cf7b21'/>
            <Text style={styles.text}>Loadingggg....</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginTop: 16,
        color:'white'
    }
})
