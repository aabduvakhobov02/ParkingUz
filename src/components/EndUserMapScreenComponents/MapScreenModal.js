import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

import * as theme from '../../utilities/theme';

const {height, width} = Dimensions.get('screen');

const MapScreenModal = ({activeModal, setActiveModal}) => {
  const {t} = useTranslation();

  return (
    <Modal
      isVisible
      useNativeDriver
      style={styles.modalContainer}
      backdropColor={theme.COLORS.overlay}
      onBackButtonPress={() => setActiveModal(null)}
      onBackdropPress={() => setActiveModal(null)}
      onSwipeComplete={() => setActiveModal(null)}>
      <View style={styles.modal}>
        <View>
          <Text
            style={{
              fontSize: theme.SIZES.font * 1.5,
              fontWeight: '700',
              color: theme.COLORS.blue,
            }}>
            {activeModal.name}
          </Text>
        </View>
        <View style={{paddingVertical: theme.SIZES.base}}>
          <Text
            style={{
              color: theme.COLORS.blue,
              fontSize: theme.SIZES.font * 1.1,
            }}>
            {t("Description")}:
          </Text>
          <Text
            style={{
              color: theme.COLORS.blue,
              fontSize: theme.SIZES.font * 1.1,
              fontWeight: '600',
            }}>
            {activeModal?.description}
          </Text>
        </View>
        <View style={styles.modalInfo}>
          <View
            style={[
              styles.parkingIcon,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <Ionicons
              name="ios-pricetag"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.red}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.blue,
              }}>
              {' '}
              {activeModal?.serviceCost?.price?.amount}{' '}
              {activeModal?.serviceCost?.price?.currency}S
            </Text>
          </View>
          <View
            style={[
              styles.parkingIcon,
              {justifyContent: 'flex-start', alignItems: 'center'},
            ]}>
            <Ionicons
              name="ios-car"
              size={theme.SIZES.icon * 1.3}
              color={theme.COLORS.red}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.blue,
              }}>
              {' '}
              {activeModal.size}/{activeModal.size}
            </Text>
          </View>
        </View>
        <View style={styles.modalInfo}>
          <View
            style={[
              styles.parkingIcon,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <Ionicons
              name="ios-pin"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.red}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.blue,
              }}>
              {' '}
              {activeModal.address?.city} {activeModal.address?.district}{' '}
              {activeModal.address?.street}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.payBtn}
            onPress={() => setActiveModal(null)}>
            <Text style={styles.payText}>{t('Close')}</Text>
            <Ionicons
              name="arrow-forward"
              size={theme.SIZES.icon * 1.75}
              color={theme.COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MapScreenModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    flexDirection: 'column',
    height: height * 0.4,
    padding: theme.SIZES.base * 2,
    backgroundColor: theme.COLORS.white,
    borderTopLeftRadius: theme.SIZES.font,
    borderTopRightRadius: theme.SIZES.font,
  },
  modalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: theme.SIZES.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.COLORS.overlay,
    borderBottomColor: theme.COLORS.overlay,
  },
  modalHours: {
    paddingVertical: height * 0.11,
  },
  modalHoursDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.SIZES.base,
  },
  payBtn: {
    marginTop: 20,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.SIZES.base * 1.5,
    backgroundColor: '#E63946',
  },
  payText: {
    fontWeight: '600',
    fontSize: theme.SIZES.base * 1.5,
    color: theme.COLORS.white,
  },
  parkingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
