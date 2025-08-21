import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useCharacterStore, AbilityKey } from '../src/store/characterStore';
import { useCallback } from 'react';

function LabeledInput({ label, value, onChangeText, keyboardType = 'default' }: {
  label: string;
  value: string;
  onChangeText: (txt: string) => void;
  keyboardType?: 'default' | 'numeric';
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={label}
      />
    </View>
  );
}

export default function CharacterScreen() {
  const { basics, abilities, maxHp, currentHp, heroPoints, speed, setBasics, setAbility, setVitals } = useCharacterStore();

  const onChangeAbility = useCallback((key: AbilityKey, txt: string) => {
    const num = Number.parseInt(txt || '0', 10);
    if (!Number.isNaN(num)) setAbility(key, num);
  }, [setAbility]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ficha - Básico</Text>
      <LabeledInput label="Nome" value={basics.name} onChangeText={(t) => setBasics({ name: t })} />
      <LabeledInput label="Linhagem" value={basics.ancestry} onChangeText={(t) => setBasics({ ancestry: t })} />
      <LabeledInput label="Herança" value={basics.heritage} onChangeText={(t) => setBasics({ heritage: t })} />
      <LabeledInput label="Antecedente" value={basics.background} onChangeText={(t) => setBasics({ background: t })} />
      <LabeledInput label="Classe" value={basics.class} onChangeText={(t) => setBasics({ class: t })} />
      <LabeledInput label="Nível" value={String(basics.level)} onChangeText={(t) => setBasics({ level: Number(t) || 1 })} keyboardType="numeric" />

      <Text style={styles.section}>Atributos (FOR, DES, CON, INT, SAB, CAR)</Text>
      {([
        ['for', 'FOR'], ['des', 'DES'], ['con', 'CON'], ['int', 'INT'], ['sab', 'SAB'], ['car', 'CAR']
      ] as [AbilityKey, string][]) .map(([key, label]) => (
        <LabeledInput key={key} label={label} value={String(abilities[key])} onChangeText={(t) => onChangeAbility(key, t)} keyboardType="numeric" />
      ))}

      <Text style={styles.section}>Vitais</Text>
      <LabeledInput label="PV Máx" value={String(maxHp)} onChangeText={(t) => setVitals({ maxHp: Number(t) || 0 })} keyboardType="numeric" />
      <LabeledInput label="PV Atuais" value={String(currentHp)} onChangeText={(t) => setVitals({ currentHp: Number(t) || 0 })} keyboardType="numeric" />
      <LabeledInput label="Pontos Heróicos" value={String(heroPoints)} onChangeText={(t) => setVitals({ heroPoints: Number(t) || 0 })} keyboardType="numeric" />
      <LabeledInput label="Deslocamento" value={String(speed)} onChangeText={(t) => setVitals({ speed: Number(t) || 0 })} keyboardType="numeric" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  section: { fontSize: 16, fontWeight: '600', marginTop: 12 },
  field: { gap: 6 },
  label: { fontSize: 12, color: '#555' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
});

