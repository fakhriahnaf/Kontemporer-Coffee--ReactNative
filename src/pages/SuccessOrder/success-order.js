import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Gap, Button} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Text style={styles.title}>Terimakasih Telah Memesan!</Text>
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

export default SuccessOrder;

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
