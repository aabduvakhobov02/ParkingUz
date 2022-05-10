import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

const InputWithLabel = ({
  label,
  placeholder,
  onChange,
  isSecure,
  hasIcon,
  iconName,
  onIconPress,
  value,
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t(label)}</Text>
      <View style={hasIcon && styles.inputWrapper}>
        <TextInput
          style={hasIcon ? styles.inputWithIcon : styles.input}
          placeholder={t(placeholder)}
          placeholderTextColor="#9297B7"
          value={value}
          onChangeText={onChange}
          secureTextEntry={isSecure}
        />
        {hasIcon && (
          <Ionicons
            name={iconName}
            size={24}
            style={styles.icon}
            onPress={onIconPress}
          />
        )}
      </View>
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
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
  inputWithIcon: {
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
