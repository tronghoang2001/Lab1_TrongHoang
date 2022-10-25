import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header({children}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffff',
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 3,
  },
  header: {
    backgroundColor: '#f26938',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
