import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Header
        title="Profile"
        onBack={() => {}}
        subtitle="this is your personality"
      />
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <View style={styles.photoContainer}>
            <Text style={styles.addPhoto}>Add Photo</Text>
          </View>
        </View>
        <Gap height={30}/>
        <Text style={styles.name}>Haris Martin</Text>
        <Text style={styles.email}>harismartin@gmail.com</Text>
      </View>
      <Gap height={40}/>
      <View style={{flex:1}}>
          <ProfileTabSection/>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 20,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  name:{
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email:{
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color:'#8D92A3',
    
  }
});
