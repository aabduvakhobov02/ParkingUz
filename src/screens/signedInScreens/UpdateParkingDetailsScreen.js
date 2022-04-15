import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

import InputWithLabel from '../../components/InputWithLabel';
import ButtonWithIcon from '../../components/ButtonWithIcon';

import {useParkingContext} from '../../hooks/useParkingContext';

import backgroundImage from '../../images/coverBackground.jpg';

const UpdateParkingDetailsScreen = ({navigation}) => {
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

  const handleSubmit = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <Text style={styles.title}>Update Parking Details</Text>
          <InputWithLabel
            label={'Company name'}
            placeholder={'Enter your Company name'}
            value={name}
            onChange={setName}
          />
          <InputWithLabel
            label={'Number of cars'}
            placeholder={'Enter parking capacity of the parking lot'}
            value={size.toString()}
            onChange={setSize}
          />
          <InputWithLabel
            label={'Price per hour'}
            placeholder={'Enter per hour parking price'}
            value={price.toString()}
            onChange={setPrice}
          />
          <InputWithLabel
            label={'Working hours'}
            placeholder={'Enter woking hours'}
            value={description}
            onChange={setDescription}
          />
        </View>
        <ButtonWithIcon
          style={styles.button}
          text={'Save'}
          icon={'save-outline'}
          onPress={handleSubmit}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpdateParkingDetailsScreen;

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
