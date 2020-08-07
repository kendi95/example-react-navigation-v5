import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Bookmark() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bookmark screen</Text>
      <Button title="Click here!" onPress={() => {}} />
    </View>
  );
}
