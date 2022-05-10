import {StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonWithIcon = ({text, icon, onPress, style}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{t(text)}</Text>
      <Ionicons name={icon} size={24} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#E63946',
    paddingHorizontal: 20,
    borderRadius: 16,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 23.4,
  },
});
