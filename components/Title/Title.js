import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Title({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  smallTitle: {
    fontSize: 13,
    color: '#767676',
  },
});
