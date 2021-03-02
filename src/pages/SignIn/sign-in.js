import React, {useState} from 'react';
import Axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    Axios.post('http://localhost:8000/api/login/', form)
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subtitle={'Just for login'} />
      <View style={styles.container}>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your Email Address'}
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label={'Password'}
          placeholder={'Type your password'}
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={40} />
        <Button text="Sign In" onPress={() => navigation.navigate('MainApp')} />
        <Gap height={16} />
        <Button
          text="Create a new account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          text="Create a new account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('Tes')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
