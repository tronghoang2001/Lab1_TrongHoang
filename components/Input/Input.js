import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Input({children}) {
  return (
    <View style={styles.container}>
      <TextInput value={children} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f06b3b',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    color: '#767676',
    backgroundColor: '#f9f9f9',
  },
});
