import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

export default function Routes() {
  const HomeStackNavigator = createStackNavigator();
  const DetailStackNavigator = createStackNavigator();
  const DrawerNavigator = createDrawerNavigator();

  const HomeStackNavigation = () => {
    const navigation = useNavigation();
    return (
      <HomeStackNavigator.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <HomeStackNavigator.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Overview',
            headerLeft: () => (
              <Icon.Button
                onPress={() => navigation.openDrawer()}
                name="menu"
                size={24}
                color="#fff"
                backgroundColor="#009387"
              />
            ),
          }}
        />
      </HomeStackNavigator.Navigator>
    );
  };

  const DetailStackNavigation = () => {
    const navigation = useNavigation();
    return (
      <DetailStackNavigator.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Icon.Button
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={24}
              color="#fff"
              backgroundColor="#009387"
            />
          ),
        }}>
        <DetailStackNavigator.Screen name="Detail" component={Detail} />
      </DetailStackNavigator.Navigator>
    );
  };

  const Drawer = () => (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Home" component={HomeStackNavigation} />
      <DrawerNavigator.Screen name="Detail" component={DetailStackNavigation} />
    </DrawerNavigator.Navigator>
  );

  return (
    <NavigationContainer>
      {/* <StackNavigator.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <StackNavigator.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Overview',
          }}
        />
        <StackNavigator.Screen name="Detail" component={Detail} />
      </StackNavigator.Navigator> */}
      <Drawer />
    </NavigationContainer>
  );
}
