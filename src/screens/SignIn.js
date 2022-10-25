import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Click from './components/Click/Click';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header>Sign in</Header>
      </View>
      <View style={styles.middle}>
        <View style={styles.input}>
          <Title>Your Email</Title>
          <Input>example@email.com</Input>
          <View style={styles.viewPassword}>
            <Title>Your Password</Title>
            <View style={styles.viewInputPw}>
              <TextInput
                value="aaaaaaaa"
                secureTextEntry={true}
                style={styles.inputPassword}
              />
            </View>
          </View>
          <View style={styles.viewClick}>
            <Click style={styles.click}>Sign in</Click>
          </View>
          <View style={styles.viewForgotPw}>
            <TouchableOpacity>
              <Text style={styles.textForgotPw}>Forgot your password?</Text>
            </TouchableOpacity>
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
    flex: 5,
  },
  input: {
    paddingTop: 130,
  },
  viewPassword: {
    paddingTop: 25,
  },
  viewInputPw: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: '#f06b3b',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    color: '#767676',
    backgroundColor: '#f9f9f9',
  },
  viewClick: {
    paddingTop: 15,
    width: 115,
    alignSelf: 'center',
  },
  viewForgotPw: {
    alignItems: 'center',
    paddingTop: 30,
  },
  textForgotPw: {
    textDecorationLine: 'underline',
    color: '#5a5b5d',
    fontSize: 17,
  },
});
