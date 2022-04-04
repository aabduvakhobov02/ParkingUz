import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Dropdown from 'react-native-modal-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as theme from '../../utilities/theme';

const {height, width} = Dimensions.get('screen');

const MapScreenModal = ({activeModal, setActiveModal}) => {
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
              color: theme.COLORS.black,
            }}>
            {activeModal.title}
          </Text>
        </View>
        <View style={{paddingVertical: theme.SIZES.base}}>
          <Text
            style={{
              color: theme.COLORS.gray,
              fontSize: theme.SIZES.font * 1.1,
            }}>
            {activeModal.description}
          </Text>
        </View>
        <View style={styles.modalInfo}>
          <View style={[styles.parkingIcon, {justifyContent: 'flex-start'}]}>
            <Ionicons
              name="ios-pricetag"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.gray,
              }}>
              {' '}
              ${activeModal.price}
            </Text>
          </View>
          <View style={[styles.parkingIcon, {justifyContent: 'flex-start'}]}>
            <Ionicons
              name="ios-star"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.gray,
              }}>
              {' '}
              {activeModal.rating}
            </Text>
          </View>
          <View
            style={[
              styles.parkingIcon,
              {justifyContent: 'flex-start', alignItems: 'center'},
            ]}>
            <Ionicons
              name="ios-pin"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.gray,
              }}>
              {' '}
              {activeModal.price}km
            </Text>
          </View>
          <View style={[styles.parkingIcon, {justifyContent: 'flex-start'}]}>
            <Ionicons
              name="ios-car"
              size={theme.SIZES.icon * 1.3}
              color={theme.COLORS.gray}
            />
            <Text
              style={{
                fontSize: theme.SIZES.icon * 1.15,
                color: theme.COLORS.gray,
              }}>
              {' '}
              {activeModal.free}/{activeModal.spots}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payText}>
              Proceed to pay ${activeModal.price}
            </Text>
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
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.SIZES.base * 1.5,
    backgroundColor: theme.COLORS.red,
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
