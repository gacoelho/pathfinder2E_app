import { Stack } from 'expo-router';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: Platform.OS !== 'web' ? true : false,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'PF2e Remaster' }} />
        <Stack.Screen name="character" options={{ title: 'Ficha' }} />
        <Stack.Screen name="about" options={{ title: 'Sobre' }} />
      </Stack>
    </SafeAreaProvider>
  );
}

