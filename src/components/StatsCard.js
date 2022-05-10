import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const StatsCard = ({title, icon, value, style, shadow}) => {
  const {t} = useTranslation();

  return (
    <View style={[styles.container, style, shadow]}>
      <View style={styles.top}>
        <Text style={[styles.title, {width: !icon ? '80%' : '60%'}]}>
          {t(title)}
        </Text>
        {icon && <Image source={icon} style={styles.icon} />}
      </View>
      <View style={styles.bottom}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
  },
  top: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    color: '#9297B7',
    width: '60%',
    fontWeight: '500',
    fontSize: 15,
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D3557',
  },
});
