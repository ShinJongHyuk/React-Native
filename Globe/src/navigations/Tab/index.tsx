import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Mail from '../../pageComponent/Mail'
import Meet from '../../pageComponent/Meet'
import Settings from '../../pageComponent/Home/Settings'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const TabIcon = (props:any) => {
    return <MaterialCommunityIcons name={props.name} size={35} color={props.color}/>
}

export default function index() {
    const Tab = createBottomTabNavigator()
   
  return (
   <Tab.Navigator
    initialRouteName='Settins'
    screenOptions={{
        tabBarShowLabel : false,
        tabBarStyle : {
            backgroundColor : '#ffffff',
            borderTopColor : 'lightgray',
            borderTopWidth : 2
        },
        tabBarActiveTintColor : 'black'
    }}
   >
        <Tab.Screen name="Mail" component={Mail} options={{tabBarIcon : props => TabIcon({...props, name: props.focused ? 'email' : 'email-outline'})}}/>
        <Tab.Screen name="Meet" component={Meet} options={{tabBarIcon : props => TabIcon({...props, name: props.focused ? 'video' : 'video-outline'})}}/>
        <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon : props => TabIcon({...props, name:props.focused ? 'cog' : 'cog-outline'})}}/>
   </Tab.Navigator> 
  )
}
