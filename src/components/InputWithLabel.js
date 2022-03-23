import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputWithLabel = ({label, placeholder, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9297B7"
        onChange={onChange}
      />
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  input: {
    width: 350,
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#9297B7',
    fontWeight: '400',
  },
});
