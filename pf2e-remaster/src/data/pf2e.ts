export type Option = { key: string; label: string };

export const ancestries: Option[] = [
  { key: 'human', label: 'Humano' },
  { key: 'dwarf', label: 'Anão' },
  { key: 'elf', label: 'Elfo' },
  { key: 'gnome', label: 'Gnomo' },
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

// Habilidades/recursos iniciais (nível 1) por classe — rascunho simplificado.
// Consulte AoN PRD para detalhes oficiais.
export const CLASS_FEATURES: Record<string, string[]> = {
  fighter: [
    'Proficiência: Armas (Trained)',
    'Proficiência: Armaduras (Trained)',
    'Ataque de Oportunidade',
  ],
  barbarian: [
    'Fúria',
    'Proficiência: Armas (Trained)',
    'Proficiência: Armaduras Leves (Trained)',
  ],
  ranger: [
    'Caçador Dedicado',
    'Trilhas do Caçador',
  ],
  rogue: [
    'Ataque Furtivo',
    'Esquiva Incrível',
  ],
  champion: [
    'Reação de Campeão',
    'Códigos e Causa',
  ],
  wizard: [
    'Preparação Arcana',
    'Escola Arcana (opcional)',
  ],
  sorcerer: [
    'Fonte de Magia',
    'Truques Inatos',
  ],
  bard: [
    'Inspiração',
    'Repertório Místico',
  ],
  druid: [
    'Ordem Druídica',
    'Magias Primitivas',
  ],
  cleric: [
    'Doutrina',
    'Domínio',
  ],
};

