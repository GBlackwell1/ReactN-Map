import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
// FYI: Don't import with { } statement :/
import Home from './custom_components/Home';
import Welcome from './custom_components/Welcome';
// Create a stack for your application
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // Main navigation points routes through nav
    <ActionSheetProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Welcome!"
            component={Welcome}
          />
          <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
}