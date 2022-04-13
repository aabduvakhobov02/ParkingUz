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

import {signUp, setRole} from '../../services/authService';
import {useStatusContext} from '../../hooks/useStatusContext';
import {FIREBASE_ERROR_MESSAGES} from '../../utilities/constants';

import backgroundImage from '../../images/coverBackground.jpg';

const RegisterScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {onErrorStatus} = useStatusContext();

  const handleEyePress = () => {
    setShowPassword(prev => !prev);
  };

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      await signUp({email, password});
      // .then(
      //   async result =>
      //     await setRole({userId: result.id, role: 'OCR:ADMIN'}).catch(e =>
      //       console.log(e),
      //     ),
      // );
      navigation.navigate('FillInformationForm');
    } catch (err) {
      onErrorStatus(FIREBASE_ERROR_MESSAGES[err.code] ?? err.message);
    }

    setIsLoading(false);
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
            value={firstName}
            onChange={setFirstName}
          />
          <InputWithLabel
            label={'Last Name'}
            placeholder={'Enter your last name'}
            value={lastName}
            onChange={setLastName}
          />
          <InputWithLabel
            label={'Email'}
            placeholder={'Enter your email address'}
            value={email}
            onChange={setEmail}
          />
          {!showPassword ? (
            <InputWithLabel
              label={'Password'}
              placeholder={'Enter your password'}
              isSecure={true}
              hasIcon
              iconName={'eye-off'}
              onIconPress={handleEyePress}
              value={password}
              onChange={setPassword}
            />
          ) : (
            <InputWithLabel
              label={'Password'}
              placeholder={'Enter your password'}
              isSecure={false}
              hasIcon
              iconName={'eye'}
              onIconPress={handleEyePress}
              value={password}
              onChange={setPassword}
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
          onPress={handleSignUp}
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
