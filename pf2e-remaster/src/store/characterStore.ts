import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type AbilityKey = 'for' | 'des' | 'con' | 'int' | 'sab' | 'car';

export type AbilityScores = Record<AbilityKey, number>;

export interface CharacterBasics {
  name: string;
  ancestry: string; // Linhagem
  heritage: string; // Herança
  background: string; // Antecedente
  class: string; // Classe
  level: number;
  traits: string[];
}

export interface CharacterState {
  basics: CharacterBasics;
  abilities: AbilityScores;
  maxHp: number;
  currentHp: number;
  heroPoints: number;
  speed: number;
  features: string[];
  setBasics: (basics: Partial<CharacterBasics>) => void;
  setAbility: (key: AbilityKey, value: number) => void;
  setVitals: (v: Partial<Pick<CharacterState, 'maxHp' | 'currentHp' | 'heroPoints' | 'speed'>>) => void;
  addFeature: (feat: string) => void;
  removeFeature: (index: number) => void;
  reset: () => void;
}

const defaultState: Omit<CharacterState, 'setBasics' | 'setAbility' | 'setVitals' | 'reset' | 'addFeature' | 'removeFeature'> = {
  basics: {
    name: '',
    ancestry: '',
    heritage: '',
    background: '',
    class: '',
    level: 1,
    traits: [],
  },
  abilities: { for: 10, des: 10, con: 10, int: 10, sab: 10, car: 10 },
  maxHp: 0,
  currentHp: 0,
  heroPoints: 1,
  speed: 25,
  features: [],
};

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      ...defaultState,
      setBasics: (basics) => set((s) => ({ basics: { ...s.basics, ...basics } })),
      setAbility: (key, value) => set((s) => ({ abilities: { ...s.abilities, [key]: value } })),
      setVitals: (v) => set((s) => ({ ...s, ...v })),
      addFeature: (feat) => set((s) => ({ features: [...s.features, feat] })),
      removeFeature: (index) => set((s) => ({ features: s.features.filter((_, i) => i !== index) })),
      reset: () => set(() => ({ ...defaultState })),
    }),
    {
      name: 'pf2e-character',
      storage: createJSONStorage(() => AsyncStorage),
      version: 1,
    }
  )
);

