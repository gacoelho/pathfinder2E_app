import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PF2e Remaster - Ficha</Text>
      <Link href="character" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Criar / Editar Ficha</Text>
        </Pressable>
      </Link>
      <Link href="about" asChild>
        <Pressable style={[styles.button, styles.secondary]}>
          <Text style={styles.buttonText}>Sobre e Referências</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  button: { backgroundColor: '#7c3aed', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  secondary: { backgroundColor: '#0ea5e9' },
  buttonText: { color: '#fff', fontWeight: '600' },
});

