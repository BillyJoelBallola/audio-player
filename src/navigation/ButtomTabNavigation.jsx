import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../theme';
import React from 'react';

import PlayList from '../screen/PlayList';
import Home from '../screen/Home';

const ButtomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const tabBarStyle= {
    position: "absolute",
    borderRadius: 50,
    height: 70,
    bottom: 20,
    right: 110,
    left: 110,
    paddingHorizontal: 20
  }

  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor= '#F17A36'
      tabBarHideKetBoard={true}
      headerShown={false}
      inactiveColor='#3e2465'
    >
      <Tab.Screen name="Home" component={Home} options={
        { 
          tabBarStyle: tabBarStyle, 
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.lightPurple : COLORS.gray}
              size={26}
            />
          )
        }
      }/>
      <Tab.Screen name="PlayList" component={PlayList} options={
        { 
          tabBarStyle: tabBarStyle, 
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "musical-notes" : "musical-notes-outline"}
              color={focused ? COLORS.lightPurple : COLORS.gray }
              size={26}
            />
          )
        }
      }/>
    </Tab.Navigator>
  )
}

export default ButtomTabNavigation;

const styles = StyleSheet.create({});