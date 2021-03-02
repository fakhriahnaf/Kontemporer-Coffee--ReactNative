import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {Header, TextInput, Gap, Button, LabelSelect} from '../../components';
import {useForm} from '../../utils';
import showMessage from '../../utils/showMessage/show-message';

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
    // dispatch({
    //   type: 'SET_REGISTER_CONTINUE',
    //   value: 'form'
    // })
    console.log('data register: ', data);
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://localhost:8000/api/register/', data)
      .then((res) => {
        console.log('data success:', res.data);

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          Axios.post('http://localhost:8000/api/user/photo', photoForUpload, {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/from-data',
            },
          })
            .then((resUpload) => {
              console.log('success upload: ', resUpload);
            })
            .catch((err) => {
              showMessage('Upload Tidak Berhasil');
            });
        }

        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch((err) => {
        console.log('sign up error: ', err.response.data.message);
        dispatch({type: 'SET_LOADING', value: false});
        showToast(err?.response?.data?.message, 'danger');
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={'Sign Up'}
        subtitle={'Just for register'}
        onBack={() => {}}
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
