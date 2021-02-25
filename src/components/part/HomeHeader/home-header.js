import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { ProfileDummy } from '../../../assets';
import { Gap } from '../part';


const HomeHeader = () => {
    return (
        <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Kontemporer Coffee</Text>
          <Gap height={8} />
          <Text style={styles.desc}>Cita rasa kopi nusantara</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
    );
}

export default HomeHeader

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 52,
        paddingBottom: 24,
        backgroundColor: 'white',
      },
      appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202',
      },
      profile: {
        width: 50,
        height: 50,
        borderRadius: 8,
      },
      desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
      },
})
