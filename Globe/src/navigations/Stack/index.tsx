import React from 'react'
import Home from '../../pageComponent/Home'
import List from '../../pageComponent/List'
import Item from '../../pageComponent/Item'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export default function StackNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle : {backgroundColor:'white'},
      headerStyle : {
        height: 110,
        backgroundColor: '#95a5a6',
        borderBottomWidth:5,
        borderBottomColor: '#34495e'
      },
      headerTitleStyle: {color: '#ffffff', fontSize:24}

    }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="Item" component={Item}/>
    </Stack.Navigator>
  )
}
