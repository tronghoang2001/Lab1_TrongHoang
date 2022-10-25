import React from 'react';

import {StyleSheet, View} from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Click from './components/Click/Click';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header>Sign up</Header>
      </View>
      <View style={styles.middle}>
        <View style={styles.input}>
          <Title>Address</Title>
          <Input>123 Street Rd</Input>
          <View style={styles.viewState}>
            <Title>State</Title>
            <Input>Victoria</Input>
          </View>
          <View style={styles.viewPhoneNumber}>
            <Title>Your phone number</Title>
            <Input>+61 1234567890</Input>
          </View>
          <View style={styles.viewClick}>
            <Click style={styles.click}>Register</Click>
          </View>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f7',
  },
  middle: {
    flex: 5,
  },
  bottom: {
    flex: 0.5,
  },
  input: {
    paddingTop: 130,
  },
  viewState: {
    paddingTop: 20,
  },
  viewPhoneNumber: {
    paddingTop: 20,
  },
  viewClick: {
    paddingTop: 17,
    width: 140,
    alignSelf: 'center',
  },
});
