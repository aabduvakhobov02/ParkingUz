import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {launchCamera} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';

import {useScanScreenContext} from '../../hooks/useScanScreenContext';

const ScanScreen = () => {
  const {text, image, setImage, setText} = useScanScreenContext();

  const openCamera = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    await launchCamera(options, res => {
      setImage(res);
    });
  };

  useEffect(() => {
    openCamera();
  }, []);

  useEffect(() => {
    (async () => {
      if (image) {
        const result = await TextRecognition.recognize(image.assets[0].uri);

        if (result.match(/[0-9]{2}[ A-Za-z]{1,3}[0-9]{3}[ A-Za-z]{1,3}/)) {
          setText(result);
        }
      }
    })();
  }, [image]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 320,
          height: 200,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>Is it correct car identity number?</Text>
          {text ? (
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              {text}
            </Text>
          ) : (
            <Text style={{color: '#e32f45', fontSize: 20}}>
              Scan the Car ID
            </Text>
          )}
        </View>
        <View style={styles.buttonsWrapper}>
          <Pressable
            style={[styles.button, styles.failed]}
            onPress={openCamera}>
            <Text style={{color: 'red', fontWeight: '500'}}>TRY AGAIN</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.primary]}>
            <Text style={{color: 'rgb(32,	138,	255)', fontWeight: '500'}}>
              SAVE
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    color: '#000000',
  },
  buttonWrapper: {
    marginLeft: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
  },
  failed: {
    backgroundColor: 'rgba(235, 87, 87, 0.1)',
  },
  primary: {
    backgroundColor: 'rgba(32,	138,	255, 0.1)',
  },
});
