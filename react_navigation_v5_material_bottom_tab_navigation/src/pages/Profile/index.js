import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </SafeAreaView>
  );
}
