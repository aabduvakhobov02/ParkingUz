import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import ButtonWithIcon from '../../components/ButtonWithIcon';
import InputWithLabel from '../../components/InputWithLabel';

import backgroundImage from '../../images/coverBackground.jpg';

const RegisterScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleEyePress = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <View>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create New Parking.uz Account</Text>
          </View>
          <InputWithLabel
            label={'First Name'}
            placeholder={'Enter your first name'}
          />
          <InputWithLabel
            label={'Last Name'}
            placeholder={'Enter your last name'}
          />
          <InputWithLabel
            label={'Email'}
            placeholder={'Enter your email address'}
          />
          {!showPassword ? (
            <InputWithLabel
              label={'Password'}
              placeholder={'Enter your password'}
              isSecure={true}
              hasIcon
              iconName={'eye-off'}
              onIconPress={handleEyePress}
            />
          ) : (
            <InputWithLabel
              label={'Password'}
              placeholder={'Enter your password'}
              isSecure={false}
              hasIcon
              iconName={'eye'}
              onIconPress={handleEyePress}
            />
          )}
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Already have an account?</Text>
            <Text
              style={[styles.text, styles.link]}
              onPress={() => navigation.navigate('SignIn')}>
              {' '}
              Sign in
            </Text>
          </View>
        </View>
        <ButtonWithIcon
          style={styles.button}
          text={'Create an account'}
          icon={'arrow-forward-outline'}
          onPress={() => navigation.navigate('SetRole')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: '700',
    fontSize: 40,
    color: '#000',
    lineHeight: 48,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 17,
    color: '#9297B7',
    marginBottom: 25,
  },
  textWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  text: {
    fontWeight: '400',
    fontSize: 17,
    color: '#000',
    marginBottom: 10,
  },
  link: {
    fontWeight: '500',
    color: '#E63946',
  },
  button: {
    marginTop: 25,
  },
});
