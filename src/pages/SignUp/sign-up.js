import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {showMessage} from '../../utils';
import ImagePicker from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpContinue');
  };

  const addPhoto = () => {
    let options = {
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel || response.error) {
        showMessage('User cancelled image picker');
      } else {
        const source = {uri: response.uri};
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        setPhoto(source);
        dispatch({type: 'SET_PHOTO', value: dataImage});
        dispatch({type: 'SET_UPLOAD_STATUS', value: true});

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header
        title={'Sign Up'}
        subtitle={'Just for registerxx'}
        onBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label={'Full Name'}
            placeholder={'Type your Full Name'}
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
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
          <Button text="Sign In" onPress={onSubmit} />
          <Gap height={16} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

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
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
