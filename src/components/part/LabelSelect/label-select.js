import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { Gap } from '../part';

const LabelSelect = ({label,value, onSelectChange, placeholder}) => {
    return (
       <View>
           <Text style={styles.label}>{label}</Text>
           <Gap height={8}/>
           <View style={styles.input}>
               <Picker
               selectedValue={value}
               onValueChange={(itemValue) => onSelectChange(itemValue)}
                >
                   <Picker.Item label='Tanah Sareal' value='tanah-sareal'/>
                   <Picker.Item label='Bogor Barat' value='bogor-barat'/>
                   <Picker.Item label='Bogor Timur' value='bogor-timur'/>
                   <Picker.Item label='Bogor Tengah' value='bogor-tengah'/>
                   <Picker.Item label='Bogor Selatan' value='bogor-selatan'/>
                   <Picker.Item label='Kabupaten Bogor' value='kabupaten-bogor'/>
               </Picker>
           </View>
       </View>
    )
}

export default LabelSelect;

const styles = StyleSheet.create({
    label : {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    input:{
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        paddingVertical: 0,
        paddingHorizontal: 2,
    }
})
