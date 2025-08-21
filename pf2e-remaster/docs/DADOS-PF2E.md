# Notas de Dados e Modelagem (PF2e Remaster)

Este documento descreve decisões de modelagem para a ficha.

## Atributos
- Chaves: `for`, `des`, `con`, `int`, `sab`, `car` (valores base numéricos)
- Modificador: `(valor - 10) / 2` arredondado para baixo

## Básico do Personagem
- `name`, `ancestry` (linhagem), `heritage` (herança), `background` (antecedente), `class` (classe), `level`
- `traits`: lista de traços livres (strings)

## Vitais
- `maxHp`, `currentHp`, `heroPoints`, `speed`

## Persistência
- `AsyncStorage` key: `pf2e-character`
- Versão do storage: `1` (migrações futuras poderão ser adicionadas)

## Próximos campos
- Proficências: `trained`, `expert`, `master`, `legendary`
- Perícias com proficiência e bônus de proficiência por nível
- Classe/ancestralidade: talentos, proficiências iniciais e PV por nível

Consulte AoN PRD para fórmulas e texto de regras: `https://2e.aonprd.com/`.