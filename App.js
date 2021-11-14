import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme, fontConfig } from 'styles';
import { UserProvider } from 'contexts/user';
import RootStack from 'navigation/RootStack';

export default function App() {
  const [fontsLoaded] = useFonts(fontConfig);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </ThemeProvider>
        </UserProvider>
    </SafeAreaProvider>
  );
}