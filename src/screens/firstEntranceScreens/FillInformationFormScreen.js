import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';

import ButtonWithIcon from '../../components/ButtonWithIcon';
import InputWithLabel from '../../components/InputWithLabel';

import {useParkingContext} from '../../hooks/useParkingContext';

import backgroundImage from '../../images/coverBackground.jpg';

const FillInformationFormScreen = ({navigation}) => {
  const {
    name,
    size,
    price,
    description,
    setName,
    setSize,
    setPrice,
    setDescription,
  } = useParkingContext();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <Text style={styles.title}>Please, fill in the form below</Text>
          <InputWithLabel
            label={'Enter your Company name'}
            placeholder={'Company name'}
            value={name}
            onChange={setName}
          />
          <InputWithLabel
            label={'Enter parking capacity of the parking lot'}
            placeholder={'Number of cars'}
            value={size}
            onChange={setSize}
          />
          <InputWithLabel
            label={'Enter per hour parking price'}
            placeholder={'Price per hour'}
            value={price}
            onChange={setPrice}
          />
          <InputWithLabel
            label={'Enter woking hours'}
            placeholder={'Working hours'}
            value={description}
            onChange={setDescription}
          />
        </View>
        <ButtonWithIcon
          style={styles.button}
          text={'Continue'}
          icon={'arrow-forward-outline'}
          onPress={() => navigation.navigate('EnterAddress')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FillInformationFormScreen;

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
    marginBottom: 25,
  },
  button: {
    marginTop: 25,
  },
});
