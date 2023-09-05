import React from 'react'
import Home from '../screens/Home'
import List from '../screens/List'
import Item from '../screens/Item'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="Item" component={Item}/>
    </Stack.Navigator>
  )
}
