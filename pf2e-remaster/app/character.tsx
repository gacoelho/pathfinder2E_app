import { View, Text, TextInput, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { useCharacterStore, AbilityKey } from '../src/store/characterStore';
import { useCallback } from 'react';

function LabeledInput({ label, value, onChangeText, keyboardType = 'default', placeholder }: {
  label: string;
  value: string;
  onChangeText: (txt: string) => void;
  keyboardType?: 'default' | 'numeric';
  placeholder?: string;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder || label}
        placeholderTextColor="#94a3b8"
      />
    </View>
  );
}

function AbilityCard({ key: abilityKey, label, value, onChange }: {
  key: AbilityKey;
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const modifier = Math.floor((value - 10) / 2);
  const modifierText = modifier >= 0 ? `+${modifier}` : `${modifier}`;

  return (
    <View style={styles.abilityCard}>
      <Text style={styles.abilityLabel}>{label}</Text>
      <TextInput
        style={styles.abilityInput}
        value={String(value)}
        onChangeText={(t) => {
          const num = Number.parseInt(t || '10', 10);
          if (!Number.isNaN(num)) onChange(num);
        }}
        keyboardType="numeric"
        placeholder="10"
        placeholderTextColor="#94a3b8"
      />
      <Text style={styles.modifier}>{modifierText}</Text>
    </View>
  );
}

function VitalCard({ label, value, maxValue, onChange, color = '#7c3aed' }: {
  label: string;
  value: number;
  maxValue?: number;
  onChange: (value: number) => void;
  color?: string;
}) {
  return (
    <View style={styles.vitalCard}>
      <Text style={styles.vitalLabel}>{label}</Text>
      <View style={styles.vitalInputContainer}>
        <TextInput
          style={[styles.vitalInput, { borderColor: color }]}
          value={String(value)}
          onChangeText={(t) => {
            const num = Number.parseInt(t || '0', 10);
            if (!Number.isNaN(num)) onChange(num);
          }}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#94a3b8"
        />
        {maxValue && (
          <Text style={styles.vitalMax}>/{maxValue}</Text>
        )}
      </View>
    </View>
  );
}

export default function CharacterScreen() {
  const { basics, abilities, maxHp, currentHp, heroPoints, speed, setBasics, setAbility, setVitals, reset } = useCharacterStore();

  const onChangeAbility = useCallback((key: AbilityKey, value: number) => {
    setAbility(key, value);
  }, [setAbility]);

  const resetCharacter = () => {
    Alert.alert(
      'Resetar Personagem',
      'Tem certeza que deseja apagar todos os dados do personagem? Esta ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Resetar', style: 'destructive', onPress: reset }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ficha de Personagem</Text>
        <Pressable style={styles.resetButton} onPress={resetCharacter}>
          <Text style={styles.resetButtonText}>🗑️ Resetar</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Informações Básicas</Text>
        <View style={styles.basicInfo}>
          <LabeledInput label="Nome do Personagem" value={basics.name} onChangeText={(t) => setBasics({ name: t })} placeholder="Ex: Aelindra" />
          <LabeledInput label="Linhagem" value={basics.ancestry} onChangeText={(t) => setBasics({ ancestry: t })} placeholder="Ex: Elfo, Humano" />
          <LabeledInput label="Herança" value={basics.heritage} onChangeText={(t) => setBasics({ heritage: t })} placeholder="Ex: Elfo do Céu" />
          <LabeledInput label="Antecedente" value={basics.background} onChangeText={(t) => setBasics({ background: t })} placeholder="Ex: Guardião" />
          <LabeledInput label="Classe" value={basics.class} onChangeText={(t) => setBasics({ class: t })} placeholder="Ex: Mago" />
          <LabeledInput label="Nível" value={String(basics.level)} onChangeText={(t) => setBasics({ level: Number(t) || 1 })} keyboardType="numeric" placeholder="1" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚔️ Atributos</Text>
        <View style={styles.abilitiesGrid}>
          {([
            ['for', 'FORÇA'], ['des', 'DESTREZA'], ['con', 'CONSTITUIÇÃO'], 
            ['int', 'INTELIGÊNCIA'], ['sab', 'SABEDORIA'], ['car', 'CARISMA']
          ] as [AbilityKey, string][]).map(([key, label]) => (
            <AbilityCard
              key={key}
              label={label}
              value={abilities[key]}
              onChange={(value) => onChangeAbility(key, value)}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>❤️ Vitais</Text>
        <View style={styles.vitalsGrid}>
          <VitalCard
            label="PV Máximos"
            value={maxHp}
            onChange={(value) => setVitals({ maxHp: value })}
            color="#ef4444"
          />
          <VitalCard
            label="PV Atuais"
            value={currentHp}
            maxValue={maxHp}
            onChange={(value) => setVitals({ currentHp: value })}
            color="#ef4444"
          />
          <VitalCard
            label="Pontos Heróicos"
            value={heroPoints}
            onChange={(value) => setVitals({ heroPoints: value })}
            color="#f59e0b"
          />
          <VitalCard
            label="Deslocamento"
            value={speed}
            onChange={(value) => setVitals({ speed: value })}
            color="#10b981"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 Dica: Os modificadores de atributo são calculados automaticamente
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#1e293b'
  },
  resetButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
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
    fontSize: 18, 
    fontWeight: '600', 
    color: '#1e293b',
    marginBottom: 16,
  },
  basicInfo: {
    gap: 16,
  },
  field: { 
    gap: 8 
  },
  label: { 
    fontSize: 14, 
    fontWeight: '600',
    color: '#374151' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#d1d5db', 
    borderRadius: 8, 
    padding: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  abilitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  abilityCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    minWidth: 80,
    flex: 1,
    maxWidth: 120,
  },
  abilityLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 8,
    textAlign: 'center',
  },
  abilityInput: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    width: 50,
    backgroundColor: '#ffffff',
  },
  modifier: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7c3aed',
    marginTop: 4,
  },
  vitalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  vitalCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 16,
    minWidth: 120,
    flex: 1,
    maxWidth: 150,
  },
  vitalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  vitalInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vitalInput: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  vitalMax: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

