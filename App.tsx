/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './config/gesture-handler';
import {TopBarNavigator} from '@features';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TopBarNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
