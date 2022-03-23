import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';

import ButtonWithIcon from '../../components/ButtonWithIcon';

import backgroundImage from '../../images/homeBackground.jpg';
import bigLogo from '../../../assets/icons/bigLogo.png';
import textLogo from '../../../assets/icons/textLogo.png';

const LanguageSelectionScreen = ({navigation}) => {
  const [data, setData] = useState([
    {
      label: 'Uzbek',
    },
    {
      label: 'Russian',
    },
    {
      label: 'English',
    },
  ]);
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
        <Text style={styles.title}>Select Your Language</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={e => console.log(e)}
          activeColor="#E63946"
          textStyle={{fontSize: 16}}
          boxStyle={{borderRadius: 16}}
        />
        <ButtonWithIcon
          style={styles.button}
          text={'Coninue'}
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
