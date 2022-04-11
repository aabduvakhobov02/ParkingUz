import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ButtonWithIcon from '../../components/ButtonWithIcon';
import InputWithLabel from '../../components/InputWithLabel';
import {useAuthContext} from '../../hooks/useAuthContext';

import backgroundImage from '../../images/coverBackground.jpg';
import sample from '../../images/sampleImage.png';

const SetRoleScreen = ({navigation}) => {
  const {setUserRole} = useAuthContext();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <View>
            <Text style={styles.title}>What do you want to do?</Text>
            {/* <Text style={styles.subtitle}>
              Let's identify in what extent you want to use the Parking.uz.
            </Text> */}
            <View style={styles.optionWrapper}>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.text}>Find parking locations</Text>
                <Image source={sample} />
                <Ionicons
                  name="arrow-forward-outline"
                  size={32}
                  color={'#E63946'}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text}>Manage your parking lot</Text>
                <Image source={sample} style={styles.image} />
                <Ionicons
                  name="arrow-forward-outline"
                  size={32}
                  color={'#E63946'}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SetRoleScreen;

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
  optionWrapper: {
    justifyContent: 'space-between',
  },
  option: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  text: {
    fontWeight: '500',
    fontSize: 22,
    color: '#000',
    width: 300,
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 12,
    right: 18,
  },
});
