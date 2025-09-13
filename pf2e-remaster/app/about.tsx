import { View, Text, StyleSheet, Linking, Pressable, ScrollView } from 'react-native';

const LinkButton = ({ title, url, description, icon }: { 
  title: string; 
  url: string; 
  description: string;
  icon: string;
}) => (
  <Pressable style={styles.linkCard} onPress={() => Linking.openURL(url)}>
    <Text style={styles.linkIcon}>{icon}</Text>
    <View style={styles.linkContent}>
      <Text style={styles.linkTitle}>{title}</Text>
      <Text style={styles.linkDescription}>{description}</Text>
    </View>
    <Text style={styles.linkArrow}>→</Text>
  </Pressable>
);

const FeatureCard = ({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string;
}) => (
  <View style={styles.featureCard}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Sobre o PF2e Remaster</Text>
        <Text style={styles.subtitle}>Criador de Fichas de Personagem</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Sobre o Projeto</Text>
        <Text style={styles.description}>
          Esta é uma aplicação não-oficial para criação e gerenciamento de fichas de personagem 
          para Pathfinder 2e Remaster. O projeto foi desenvolvido com React Native e Expo, 
          permitindo que funcione tanto em dispositivos móveis quanto em navegadores web.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Funcionalidades</Text>
        <View style={styles.featuresGrid}>
          <FeatureCard
            icon="📝"
            title="Ficha Completa"
            description="Informações básicas, atributos e vitais do personagem"
          />
          <FeatureCard
            icon="🧮"
            title="Cálculos Automáticos"
            description="Modificadores de atributo calculados automaticamente"
          />
          <FeatureCard
            icon="💾"
            title="Salvamento Local"
            description="Dados salvos no navegador usando AsyncStorage"
          />
          <FeatureCard
            icon="📱"
            title="Interface Responsiva"
            description="Funciona perfeitamente em desktop, tablet e mobile"
          />
          <FeatureCard
            icon="🎨"
            title="Design Moderno"
            description="Interface limpa e intuitiva com visual atrativo"
          />
          <FeatureCard
            icon="🔄"
            title="Reset Fácil"
            description="Botão para resetar a ficha e começar do zero"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔗 Referências e Recursos</Text>
        <View style={styles.linksContainer}>
          <LinkButton
            icon="🏗️"
            title="Pathbuilder 2e"
            description="Ferramenta oficial para criação de personagens (inspiração para este projeto)"
            url="https://pathbuilder2e.com/app.html?v=98a"
          />
          <LinkButton
            icon="📚"
            title="Archives of Nethys"
            description="Site oficial com todas as regras e conteúdos do Pathfinder 2e"
            url="https://2e.aonprd.com/"
          />
          <LinkButton
            icon="🎲"
            title="Paizo Publishing"
            description="Editora oficial do Pathfinder 2e"
            url="https://paizo.com/"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚖️ Licenças e Avisos</Text>
        <View style={styles.legalCard}>
          <Text style={styles.legalText}>
            <Text style={styles.legalBold}>Aviso Legal:</Text> Este projeto é não-oficial e não possui afiliação com a Paizo Publishing, LLC.
          </Text>
          <Text style={styles.legalText}>
            <Text style={styles.legalBold}>Conteúdo:</Text> Nenhum conteúdo protegido por direitos autorais é incluído. Apenas metadados mínimos e estruturas de dados são utilizados.
          </Text>
          <Text style={styles.legalText}>
            <Text style={styles.legalBold}>Regras:</Text> Para o texto completo das regras, consulte o Archives of Nethys ou os livros oficiais da Paizo.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Tecnologias Utilizadas</Text>
        <View style={styles.techGrid}>
          <Text style={styles.techItem}>⚛️ React Native</Text>
          <Text style={styles.techItem}>📱 Expo</Text>
          <Text style={styles.techItem}>🔄 Zustand</Text>
          <Text style={styles.techItem}>💾 AsyncStorage</Text>
          <Text style={styles.techItem}>🌐 React Native Web</Text>
          <Text style={styles.techItem}>📝 TypeScript</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvido com ❤️ para a comunidade Pathfinder 2e
        </Text>
        <Text style={styles.footerSubtext}>
          Versão 1.0.0 • 2024
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    backgroundColor: '#f8fafc',
    minHeight: 800
  },
  hero: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 20,
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#1e293b',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  featuresGrid: {
    gap: 12,
  },
  featureCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureIcon: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#64748b',
    flex: 1,
  },
  linksContainer: {
    gap: 12,
  },
  linkCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  linkIcon: {
    fontSize: 24,
  },
  linkContent: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  linkDescription: {
    fontSize: 14,
    color: '#64748b',
  },
  linkArrow: {
    fontSize: 18,
    color: '#7c3aed',
    fontWeight: 'bold',
  },
  legalCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  legalText: {
    fontSize: 14,
    color: '#92400e',
    lineHeight: 20,
    marginBottom: 8,
  },
  legalBold: {
    fontWeight: '600',
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  techItem: {
    backgroundColor: '#e0e7ff',
    color: '#3730a3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

