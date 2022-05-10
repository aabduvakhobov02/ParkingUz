import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import ButtonWithIcon from '../../components/ButtonWithIcon';
import InputWithLabel from '../../components/InputWithLabel';

import {signInWithEmailAndPassword} from '../../services/authService';
import {useStatusContext} from '../../hooks/useStatusContext';
import {useAuthContext} from '../../hooks/useAuthContext';

import backgroundImage from '../../images/coverBackground.jpg';

const SignInScreen = ({route, navigation}) => {
  const {t} = useTranslation();
  const {isEndUser} = route.params;

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEyePress = () => {
    setShowPassword(prev => !prev);
  };

  const errorAlert = err =>
    Alert.alert('Error on Sign In.', `${err.beErrorCode}`, [{text: 'OK'}]);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword({
        email,
        password,
      });
    } catch (err) {
      errorAlert(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <View>
            <Text style={styles.title}>{t('Sign In')}</Text>
            <Text style={styles.subtitle}>
              {t('Access Parking.uz using your email and password.')}
            </Text>
          </View>
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
            <Text style={styles.text}>{t('New to our platform?')}</Text>
            <Text
              style={[styles.text, styles.link]}
              onPress={() =>
                navigation.navigate('Register', {isEndUser: isEndUser})
              }>
              {' '}
              {t('Create an account')}
            </Text>
          </View>
        </View>
        <ButtonWithIcon
          style={styles.button}
          text={'Sign in'}
          icon={'arrow-forward-outline'}
          onPress={handleSignIn}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
