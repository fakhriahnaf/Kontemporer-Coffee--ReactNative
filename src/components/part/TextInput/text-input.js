import React from 'react'
import { StyleSheet, Text, View , TextInput as TextInputRN} from 'react-native'
import { Gap } from '../part';

const TextInput = ({label, placeholder}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Gap height={8}/>
            <TextInputRN style={styles.inpuw} placeholder={placeholder}></TextInputRN>
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    label:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    inpuw: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        padding: 13,
    }
})
