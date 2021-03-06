import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Header, TextInput, Gap, Button, LabelSelect} from '../../components';
import {useForm} from '../../utils';
import {setLoading, signUpAction} from '../../redux/action';

const SignUpContinue = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    portalCode: '',
    kecamatan_area: 'bogor-timur',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state) => state);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data register: ', data);
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <View style={styles.page}>
      <Header
        title={'Sign Up'}
        subtitle={'Just for register'}
        onBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TextInput
            label={'Phone Number'}
            placeholder={'Type your phone number'}
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Address'}
            placeholder={'Type your Home Address'}
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Portal Code'}
            placeholder={'Type your Portal Code'}
            value={form.portalCode}
            onChangeText={(value) => setForm('portalCode', value)}
          />
          <Gap height={16} />
          <LabelSelect
            label="Kecamatan / area"
            value={form.kecamatan_area}
            onSelectChange={(value) => setForm('kecamatan_area', value)}
          />
          <Gap height={40} />
          <Button text="Sign In" onPress={onSubmit} />
          <Gap height={16} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpContinue;

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
