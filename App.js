import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme, fontConfig } from 'styles';
import { UserProvider } from 'contexts/user';
import { RoomProvider } from 'contexts/room';
import RootStack from 'navigation/RootStack';
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded] = useFonts(fontConfig);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <RoomProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </ThemeProvider>
        </UserProvider>
      </RoomProvider>
      <Toast/>
    </SafeAreaProvider>
  );
}