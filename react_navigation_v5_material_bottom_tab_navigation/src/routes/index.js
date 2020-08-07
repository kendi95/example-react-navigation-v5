import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Detail from '../pages/Detail';
import Explore from '../pages/Explore';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default function Routes() {
  const HomeStackNavigator = createStackNavigator();
  const DetailStackNavigator = createStackNavigator();
  const DrawerNavigator = createDrawerNavigator();
  const MaterialBottomNavigator = createMaterialBottomTabNavigator();

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
            backgroundColor: '#1f65ff',
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
              backgroundColor="#1f65ff"
            />
          ),
        }}>
        <DetailStackNavigator.Screen name="Detail" component={Detail} />
      </DetailStackNavigator.Navigator>
    );
  };

  const MainTab = () => {
    return (
      <MaterialBottomNavigator.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        style={{backgroundColor: 'tomato'}}>
        <MaterialBottomNavigator.Screen
          name="Home"
          component={HomeStackNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <MaterialBottomNavigator.Screen
          name="Detail"
          component={DetailStackNavigation}
          options={{
            tabBarLabel: 'Detail',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({color}) => (
              <Icon name="notifications" color={color} size={26} />
            ),
          }}
        />
        <MaterialBottomNavigator.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#7159c1',
            tabBarIcon: ({color}) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
        <MaterialBottomNavigator.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#999',
            tabBarIcon: ({color}) => (
              <Icon name="settings" color={color} size={26} />
            ),
          }}
        />
      </MaterialBottomNavigator.Navigator>
    );
  };

  const Drawer = () => (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Home" component={MainTab} />
      {/* <DrawerNavigator.Screen name="Detail" component={DetailStackNavigation} /> */}
    </DrawerNavigator.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
