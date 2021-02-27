import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { IlEmptyOrder } from '../../assets';
import { Button, Gap } from '../../components';
import {useNavigation} from '@react-navigation/native'

const EmptyOrder = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <IlEmptyOrder/>
      <Text style={styles.title}>Kok kosong :(</Text>
      <Gap height={26}/>
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some order as a self hearning</Text>
      <Gap height={70} />
      <View style={styles.buttonContainer}>
        <Button
          text="Find the origin"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={13} />
      <View style={styles.buttonContainer}>
        <Button
          color="#8D92A3"
          textColor="#FFFFFF"
          text="Find the origin"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        
      },
      subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
      },
      buttonContainer: {
        width: '100%',
        paddingHorizontal: 80,
      },
});
