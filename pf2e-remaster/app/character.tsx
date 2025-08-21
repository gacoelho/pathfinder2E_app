import { View, Text, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useCharacterStore, AbilityKey } from '../src/store/characterStore';
import { Picker } from '@react-native-picker/picker';
import { ancestries, classes, CLASS_FEATURES } from '../src/data/pf2e';
import React, { useCallback, useState } from 'react';

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

function FeatureAdder({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');
  return (
    <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
      <TextInput style={[styles.input, { flex: 1 }]} value={text} onChangeText={setText} placeholder="Nome da habilidade/talento" />
      <Pressable style={styles.button} onPress={() => { onAdd(text); setText(''); }}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

export default function CharacterScreen() {
  const { basics, abilities, maxHp, currentHp, heroPoints, speed, features, setBasics, setAbility, setVitals, addFeature, removeFeature, selectClass } = useCharacterStore();

  const onChangeAbility = useCallback((key: AbilityKey, txt: string) => {
    const num = Number.parseInt(txt || '0', 10);
    if (!Number.isNaN(num)) setAbility(key, num);
  }, [setAbility]);

  const classFeatures = basics.class ? (CLASS_FEATURES[basics.class] ?? []) : [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ficha - Básico</Text>
      <LabeledInput label="Nome" value={basics.name} onChangeText={(t) => setBasics({ name: t })} />
      <Text style={styles.label}>Linhagem</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={basics.ancestry} onValueChange={(v) => setBasics({ ancestry: String(v) })}>
          <Picker.Item label="Selecione..." value="" />
          {ancestries.map((a) => (
            <Picker.Item key={a.key} label={a.label} value={a.key} />
          ))}
        </Picker>
      </View>

      <LabeledInput label="Herança" value={basics.heritage} onChangeText={(t) => setBasics({ heritage: t })} />
      <LabeledInput label="Antecedente" value={basics.background} onChangeText={(t) => setBasics({ background: t })} />

      <Text style={styles.label}>Classe</Text>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={basics.class}
          onValueChange={(v) => {
            const key = String(v);
            setBasics({ class: key });
            const initial = CLASS_FEATURES[key] ?? [];
            selectClass(key, initial);
          }}
        >
          <Picker.Item label="Selecione..." value="" />
          {classes.map((c) => (
            <Picker.Item key={c.key} label={c.label} value={c.key} />
          ))}
        </Picker>
      </View>
      <LabeledInput label="Nível" value={String(basics.level)} onChangeText={(t) => setBasics({ level: Number(t) || 1 })} keyboardType="numeric" />

      <Text style={styles.section}>Atributos (FOR, DES, CON, INT, SAB, CAR)</Text>
      {([
        ['for', 'FOR'], ['des', 'DES'], ['con', 'CON'], ['int', 'INT'], ['sab', 'SAB'], ['car', 'CAR']
      ] as [AbilityKey, string][]) .map(([key, label]) => (
        <LabeledInput key={key} label={label} value={String(abilities[key])} onChangeText={(t) => onChangeAbility(key, t)} keyboardType="numeric" />
      ))}

      <Text style={styles.section}>Habilidades de Classe</Text>
      {classFeatures.length === 0 ? (
        <Text style={styles.label}>Selecione uma classe para ver habilidades iniciais.</Text>
      ) : (
        classFeatures.map((f, i) => (
          <Text key={`${f}-${i}`}>• {f}</Text>
        ))
      )}

      <Text style={styles.section}>Vitais</Text>
      <LabeledInput label="PV Máx" value={String(maxHp)} onChangeText={(t) => setVitals({ maxHp: Number(t) || 0 })} keyboardType="numeric" />
      <LabeledInput label="PV Atuais" value={String(currentHp)} onChangeText={(t) => setVitals({ currentHp: Number(t) || 0 })} keyboardType="numeric" />
      <LabeledInput label="Pontos Heróicos" value={String(heroPoints)} onChangeText={(t) => setVitals({ heroPoints: Number(t) || 0 })} keyboardType="numeric" />
      <LabeledInput label="Deslocamento" value={String(speed)} onChangeText={(t) => setVitals({ speed: Number(t) || 0 })} keyboardType="numeric" />

      <Text style={styles.section}>Habilidades/Talentos (custom)</Text>
      <FeatureAdder onAdd={(txt) => { if (txt.trim()) addFeature(txt.trim()); }} />
      {features.map((feat, idx) => (
        <View key={`${feat}-${idx}`} style={styles.featureRow}>
          <Text style={{ flex: 1 }}>{feat}</Text>
          <Pressable style={[styles.button, styles.remove]} onPress={() => removeFeature(idx)}>
            <Text style={styles.buttonText}>Remover</Text>
          </Pressable>
        </View>
      ))}
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
  pickerBox: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  button: { backgroundColor: '#7c3aed', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  remove: { backgroundColor: '#ef4444' },
  buttonText: { color: '#fff', fontWeight: '600' },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
});

