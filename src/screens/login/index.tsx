import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ConnectMeIcon } from '../../../assets/icons/Logo';
import { TextInput, Button } from 'react-native-paper';
import { useAtom } from 'jotai';
import { isAuthorized } from '../../atoms/Authorizations';

export const LoginScreen = () => {
  // atom
  const [, setAuthorized] = useAtom(isAuthorized);

  // local states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          rowGap: 20,
          padding: 30
        }}>
        <View
          style={{
            height: '40%',
            width: '40%',
            aspectRatio: 1200 / 1200
          }}>
          <ConnectMeIcon />
        </View>
        <View style={{ width: '100%' }}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
          />
          <Button mode="contained" onPress={() => setAuthorized(true)}>
            Login
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { marginBottom: 16 }
});
