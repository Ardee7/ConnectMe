import React from 'react';
import { Alert, Button, SafeAreaView, Text, View } from 'react-native';
import { readTag, writeTag } from '../../services/NfcManager';

export const NFCScreen = () => {
  const handleReadTag = async () => {
    const tag = await readTag();
    Alert.alert('Tag Read', JSON.stringify(tag));
  };

  const handleWriteTag = async () => {
    const result = await writeTag('Hello NFC');
    Alert.alert('Tag Write', result);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
        <Text>NFC Example</Text>
        <Button title="Read NFC Tag" onPress={handleReadTag} />
        <Button title="Write NFC Tag" onPress={handleWriteTag} />
      </View>
    </SafeAreaView>
  );
};
