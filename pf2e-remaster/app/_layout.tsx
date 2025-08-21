import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'PF2e Remaster' }} />
        <Stack.Screen name="character" options={{ title: 'Ficha' }} />
        <Stack.Screen name="about" options={{ title: 'Sobre' }} />
      </Stack>
    </SafeAreaProvider>
  );
}

