import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

import ButtonWithIcon from '../../components/ButtonWithIcon';

import backgroundImage from '../../images/coverBackground.jpg';
import welcomeImage from '../../images/welcomeImage.png';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Image
            source={welcomeImage}
            style={styles.logo}
            resizeMethod={'resize'}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            Manage your parking lot easily and simply.
          </Text>
          <Text style={styles.text}>
            Conveniently track the cars that are in your parking lot
          </Text>
        </View>
        <ButtonWithIcon
          style={styles.button}
          text={'Coninue'}
          icon={'arrow-forward-outline'}
          onPress={() => navigation.navigate('FillInformationForm')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

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
  header: {
    flex: 1,
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
    marginBottom: 15,
  },
  text: {
    fontWeight: '400',
    fontSize: 20,
    color: '#9297B7',
    marginBottom: 10,
  },
  button: {
    marginTop: 25,
  },
});
