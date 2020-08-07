import {DrawerContentScrollView} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

export default function DrawerContent(props) {
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleSwitch() {
    setDarkTheme(!darkTheme);
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 15,
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri:
                    'https://avatars3.githubusercontent.com/u/36816259?s=460&u=387eba6ca069c4503e00dc8c8b69903db2d348c8&v=4',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Alisson Kendi Kohatsu</Title>
                <Caption style={styles.caption}>alisson@mail.com</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={styles.paragraph}>80</Paragraph>
                <Caption style={styles.section}>Seguindo</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={styles.paragraph}>100</Paragraph>
                <Caption style={styles.section}>Seguidor</Caption>
              </View>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            onPress={() => props.navigation.navigate('Home')}
            label="Home"
            icon={(color, size) => (
              <Icon name="home-outline" color={color} size={24} />
            )}
          />
          <Drawer.Item
            onPress={() => props.navigation.navigate('Profile')}
            label="Profile"
            icon={(color, size) => (
              <Icon name="account-outline" color={color} size={24} />
            )}
          />
          <Drawer.Item
            onPress={() => props.navigation.navigate('Bookmark')}
            label="Bookmarks"
            icon={(color, size) => (
              <Icon name="bookmark-outline" color={color} size={24} />
            )}
          />
          <Drawer.Item
            onPress={() => props.navigation.navigate('Settings')}
            label="Settings"
            icon={(color, size) => (
              <Icon name="settings-outline" color={color} size={24} />
            )}
          />
          <Drawer.Item
            onPress={() => props.navigation.navigate('Support')}
            label="Support"
            icon={(color, size) => (
              <Icon name="account-check-outline" color={color} size={24} />
            )}
          />
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} title="Preferências">
          <TouchableRipple onPress={() => toggleSwitch()}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={darkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Item
        onPress={() => {}}
        label="Signout"
        icon={(color, size) => (
          <Icon name="exit-to-app" color={color} size={24} />
        )}
      />
    </View>
  );
}
