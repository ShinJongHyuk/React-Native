import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import Tab from './navigations/Tab'
const App = () => {
    return (
      <NavigationContainer>
        <Tab/>
      </NavigationContainer>
    );
  }

  export default App