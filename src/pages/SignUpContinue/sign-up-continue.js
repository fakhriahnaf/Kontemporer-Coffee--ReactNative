import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Gap, Button, LabelSelect } from '../../components';

const SignUpContinue = ({navigation}) => {
    return (
        <View style={styles.page}>
          <Header
            title={'Sign Up'}
            subtitle={'Just for register'}
            onBack={() => {}}
          />
          <View style={styles.container}>
            <TextInput label={'Phone Number'} placeholder={'Type your phone number'} />
            <Gap height={16} />
            <TextInput
              label={'Address'}
              placeholder={'Type your Home Address'}
            />
            <Gap height={16} />
            <TextInput label={'Portal Code'} placeholder={'Type your Portal Code'} />
            <Gap height={16} />
            <LabelSelect/>
            <Gap height={40} />
            <Button text="Sign In" onPress={() => navigation.navigate('SuccessSignUp')}/>
            <Gap height={16}  />
          </View>
        </View>
      );
}

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
})
