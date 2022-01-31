import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';

import {useScanScreenContext} from '../hooks/useScanScreenContext';

const ScanScreen = () => {
  const {text, image, setImage, setText} = useScanScreenContext();

  useEffect(() => {
    (async () => {
      let options = {
        storageOptions: {
          skipBackup: true,

          path: 'images',
        },
      };

      await launchCamera(options, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);

          alert(res.customButton);
        } else {
          setImage(res);
        }
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (image) {
        const result = await TextRecognition.recognize(image.assets[0].uri);

        console.log(result);
        setText(result);
      }
    })();
  }, [image]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Is it correct car identity number?</Text>
        {text ? (
          <Text style={{color: '#FF0000'}}>{text}</Text>
        ) : (
          <Text style={{color: '#FF0000', fontSize: 20}}>01 B 989 WA</Text>
        )}
      </View>
      <View style={styles.buttonsWrapper}>
        <View>
          <Button title="Correct" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Try Again" />
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
    color: '#e4e4e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
  },
  buttonWrapper: {
    marginLeft: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
