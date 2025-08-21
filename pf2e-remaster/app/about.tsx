import { View, Text, StyleSheet, Linking, Pressable, ScrollView } from 'react-native';

const LinkButton = ({ title, url }: { title: string; url: string }) => (
  <Pressable style={styles.link} onPress={() => Linking.openURL(url)}>
    <Text style={styles.linkText}>{title}</Text>
  </Pressable>
);

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text>Aplicação não-oficial para criação de ficha de Pathfinder 2E Remaster.</Text>
      <Text style={styles.section}>Referências Principais</Text>
      <LinkButton title="Pathbuilder 2e ( inspiração )" url="https://pathbuilder2e.com/app.html?v=98a" />
      <LinkButton title="Archives of Nethys (AoN PRD)" url="https://2e.aonprd.com/" />
      <Text style={styles.section}>Licenças</Text>
      <Text>
        Este projeto usa dados e regras referenciadas do sistema PF2e Remaster. Consulte o site oficial do AoN PRD para texto completo das regras.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: 'bold' },
  section: { fontSize: 16, fontWeight: '600', marginTop: 12 },
  link: { backgroundColor: '#111827', borderRadius: 8, padding: 12 },
  linkText: { color: '#fff' },
});

