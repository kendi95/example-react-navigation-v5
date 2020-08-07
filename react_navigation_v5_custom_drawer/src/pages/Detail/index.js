import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

export default function Detail() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <View style={{marginTop: 8}}>
        <Button
          title="Go to Detail Screen again..."
          onPress={() => navigation.push('Detail')}
        />
      </View>
      <View style={{marginTop: 8}}>
        <Button
          title="Go to Home Screen..."
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{marginTop: 8}}>
        <Button
          title="Go back to Home screen..."
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{marginTop: 8}}>
        <Button
          title="Go to first screen..."
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeAreaView>
  );
}
