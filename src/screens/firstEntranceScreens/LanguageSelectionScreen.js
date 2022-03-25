import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import {useTranslation} from 'react-i18next';

import ButtonWithIcon from '../../components/ButtonWithIcon';

import {languageMenu} from '../../configs/i18nConfig';

import backgroundImage from '../../images/homeBackground.jpg';
import bigLogo from '../../../assets/icons/bigLogo.png';
import textLogo from '../../../assets/icons/textLogo.png';

const LanguageSelectionScreen = ({navigation}) => {
  const {i18n, t} = useTranslation();

  const handleOnLanguageMenuItemSelected = item => {
    if (i18n?.language !== item.code) {
      i18n?.changeLanguage(item.code);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}
        imageStyle={{
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
        }}>
        <Image source={bigLogo} style={styles.logo} resizeMethod={'resize'} />
        <Image source={textLogo} style={styles.textLogo} />
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.title}>{t('Select Your Language')}</Text>
        <RadioButtonRN
          data={languageMenu}
          selectedBtn={item => handleOnLanguageMenuItemSelected(item)}
          activeColor="#E63946"
          textStyle={{fontSize: 16}}
          boxStyle={{borderRadius: 16, flexDirection: 'row-reverse'}}
        />
        <ButtonWithIcon
          style={styles.button}
          text={'Continue'}
          icon={'arrow-forward-outline'}
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LanguageSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'relative',
  },
  textLogo: {
    marginTop: 15,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1D3557',
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
  },
});
