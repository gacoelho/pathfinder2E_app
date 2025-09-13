import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Pathfinder 2e Remaster</Text>
        <Text style={styles.subtitle}>Criador de Fichas de Personagem</Text>
        <Text style={styles.description}>
          Crie e gerencie fichas de personagem para Pathfinder 2e com interface moderna e intuitiva.
        </Text>
      </View>

      <View style={styles.features}>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>⚔️</Text>
          <Text style={styles.featureTitle}>Ficha Completa</Text>
          <Text style={styles.featureText}>Atributos, vitais, e informações básicas</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>💾</Text>
          <Text style={styles.featureTitle}>Salvamento Local</Text>
          <Text style={styles.featureText}>Suas fichas ficam salvas no navegador</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>📱</Text>
          <Text style={styles.featureTitle}>Responsivo</Text>
          <Text style={styles.featureText}>Funciona em desktop, tablet e mobile</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Link href="/character" asChild>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>🚀 Criar Nova Ficha</Text>
          </Pressable>
        </Link>
        <Link href="/about" asChild>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>ℹ️ Sobre e Referências</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto não-oficial • Dados baseados no Archives of Nethys
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20, 
    backgroundColor: '#f8fafc',
    minHeight: 800
  },
  hero: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 40,
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    marginBottom: 16,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 600,
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 40,
    gap: 20,
  },
  feature: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
    minWidth: 200,
    maxWidth: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  actions: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 40,
  },
  primaryButton: { 
    backgroundColor: '#7c3aed', 
    paddingVertical: 16, 
    paddingHorizontal: 32, 
    borderRadius: 12,
    shadowColor: '#7c3aed',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    minWidth: 250,
  },
  primaryButtonText: { 
    color: '#fff', 
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  secondaryButton: { 
    backgroundColor: 'transparent', 
    borderWidth: 2,
    borderColor: '#0ea5e9',
    paddingVertical: 14, 
    paddingHorizontal: 30, 
    borderRadius: 12,
    minWidth: 250,
  },
  secondaryButtonText: { 
    color: '#0ea5e9', 
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  footerText: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
});

