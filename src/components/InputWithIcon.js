import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputWithIcon = ({placeholder, iconName, onChange, style}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        placeholderTextColor="#9297B7"
      />
      <Ionicons name={iconName} size={24} style={styles.icon} />
    </View>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  input: {
    width: 280,
    height: 55,
    paddingHorizontal: 20,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#9297B7',
    fontWeight: '500',
  },
  icon: {
    paddingHorizontal: 20,
  },
});
