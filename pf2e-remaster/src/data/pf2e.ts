export type Option = { key: string; label: string };

export const ancestries: Option[] = [
  { key: 'human', label: 'Humano' },
  { key: 'dwarf', label: 'Anão' },
  { key: 'elf', label: 'Elfo' },
  { key: 'gnome', label: 'Gnomu' },
  { key: 'goblin', label: 'Goblin' },
  { key: 'halfling', label: 'Halfling' },
  // Remaster inclui outras opções — expandir usando AoN PRD
];

export const classes: Option[] = [
  { key: 'fighter', label: 'Guerreiro' },
  { key: 'barbarian', label: 'Bárbaro' },
  { key: 'ranger', label: 'Patrulheiro' },
  { key: 'rogue', label: 'Ladino' },
  { key: 'champion', label: 'Campeão' },
  { key: 'wizard', label: 'Mago' },
  { key: 'sorcerer', label: 'Feiticeiro' },
  { key: 'bard', label: 'Bardo' },
  { key: 'druid', label: 'Druida' },
  { key: 'cleric', label: 'Clérigo' },
  // Expandir conforme necessário; nomes traduzidos para UI
];

