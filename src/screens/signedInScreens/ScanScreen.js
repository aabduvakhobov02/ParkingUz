import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';
import {useTranslation} from 'react-i18next';
import moment from 'moment';

import {
  createCar,
  getCarByNumber,
  removeCar,
} from '../../services/vehicleService';
import {
  unixTimeConvertor,
  getCurrentTimeDifferenceInHours,
} from '../../utilities/dateTimeUtils';

import {useScanScreenContext} from '../../hooks/useScanScreenContext';
import {useParkingContext} from '../../hooks/useParkingContext';
import {useBeManualFetcher} from '../../hooks/useBeManualFetcher';

const ScanScreen = ({navigation}) => {
  const {text, image, setImage, setText} = useScanScreenContext();
  const {parkingId, carList, price} = useParkingContext();
  const {t} = useTranslation();
  const [onFetch] = useBeManualFetcher();

  const [showDeleteModal, setShowDeleteModal] = useState();
  const [existingCarDetails, setExistingCarDetails] = useState();

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

  const handleSubmit = async () => {
    await createCar(parkingId, text).then(() => setText(null));
    navigation.navigate('CarListScreen');
  };

  const handleRemove = async () => {
    await removeCar(parkingId, text).then(() => setText(null));
    navigation.navigate('CarListScreen');
  };

  const getExistingVehicle = async () => {
    onFetch({
      action: async () => await getCarByNumber(parkingId, text),
      onLoad: result => {
        console.log(result);
        setExistingCarDetails(prev => result);
      },
    });
  };

  useEffect(() => {
    const copiedCarList = carList;

    const car = copiedCarList.find(car => car.carNumber == text);
    console.log('car', car);
    if (copiedCarList.find(car => car.carNumber == text)) {
      setShowDeleteModal(true);
      getExistingVehicle();
      return;
    }

    setShowDeleteModal(false);
  }, [text]);

  useEffect(() => {
    (async () => {
      if (image) {
        const result = await TextRecognition.recognize(image.assets[0].uri);

        result.map(item => {
          if (
            item.match(/([0-9]{2})([ A-Za-z]{1,3})([0-9]{3})([ A-Za-z]{1,3})/)
          ) {
            setText(item);
          }
        });
      }
    })();
  }, [image]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 320,
          height: 310,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          padding: 20,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}>
        {showDeleteModal && (
          <View>
            <View style={[styles.textWrapper, styles.carNumberWrapper]}>
              <Text style={styles.carNumber}>{t('Vehicle Number')}: </Text>
              <Text style={[styles.carNumber, styles.carNumberBold]}>
                {existingCarDetails?.carNumber}
              </Text>
            </View>
            <View style={styles.detailsWrapper}>
              <View style={styles.textWrapper}>
                <Text style={styles.details}>{t('Entrance Time')}: </Text>
                <Text style={[styles.details, styles.detailsBold]}>
                  {unixTimeConvertor(existingCarDetails?.createAt)}
                </Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.details}>{t('Leaving Time')}: </Text>
                <Text style={[styles.details, styles.detailsBold]}>
                  {moment().format('hh:mm')}
                </Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.details}>{t('Parking Duration')}: </Text>
                <Text style={[styles.details, styles.detailsBold]}>
                  {getCurrentTimeDifferenceInHours(
                    moment.unix(existingCarDetails?.createAt),
                  )}{' '}
                  hours
                </Text>
              </View>
            </View>
            <View style={[styles.textWrapper, styles.carNumberWrapper]}>
              <Text style={styles.carNumber}>{t('Total Price')}: </Text>
              <Text style={[styles.carNumber, styles.carNumberBold]}>
                {parseFloat(
                  getCurrentTimeDifferenceInHours(
                    moment.unix(existingCarDetails?.createAt),
                  ),
                ) * parseFloat(price)}{' '}
                UZS
              </Text>
            </View>
            <View style={styles.buttonsWrapper}>
              <Pressable
                style={[styles.button, styles.primary]}
                onPress={openCamera}>
                <Text style={{color: 'rgb(32,	138,	255)', fontWeight: '500'}}>
                  {t('CANCEL')}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.failed]}
                onPress={handleRemove}>
                <Text style={{color: 'red', fontWeight: '500'}}>
                  {t('REMOVE')}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        {!showDeleteModal && (
          <View style={styles.modalWrapper}>
            <Text style={styles.title}>
              {t('Is the vehicle plate number valid?')}
            </Text>
            {text ? (
              <Text style={styles.text}>{text}</Text>
            ) : (
              <Text style={styles.text}>{t('Scan the vehicle number')}</Text>
            )}
            <View style={styles.buttonsWrapper}>
              <Pressable
                style={[styles.button, styles.failed]}
                onPress={openCamera}>
                <Text style={{color: 'red', fontWeight: '500'}}>
                  {t('TRY AGAIN')}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.primary]}
                onPress={handleSubmit}>
                <Text style={{color: 'rgb(32,	138,	255)', fontWeight: '500'}}>
                  {t('SAVE')}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
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
  modalWrapper: {
    height: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    paddingTop: 30,
    color: '#1D3557',
    fontSize: 16,
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonWrapper: {
    marginLeft: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
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
  textWrapper: {
    flexDirection: 'row',
    paddingLeft: 0,
  },
  carNumber: {
    color: '#1D3557',
    fontSize: 20,
    paddingTop: 15,
  },
  carNumberBold: {
    fontWeight: '700',
  },
  detailsWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: '#e32f45',
    paddingVertical: 15,
  },
  details: {
    color: '#1D3557',
    paddingVertical: 5,
    fontSize: 15,
  },
  detailsBold: {
    fontWeight: '700',
  },
});

const getCurrentDate = () => {
  const dateTime = new Date();
  return `${dateTime.getHours()}:${dateTime.getMinutes()}`;
};

const entrance = '7:00';

let start = new Date(getCurrentDate()).getDate();
