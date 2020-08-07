import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Settings() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings screen</Text>
      <Button title="Click here!" onPress={() => {}} />
    </View>
  );
}
