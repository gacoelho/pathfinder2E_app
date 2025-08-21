# PF2e Remaster — Ficha (React Native + Web)

Aplicação com Expo (React Native + Web) para criação/edição de ficha de personagem de Pathfinder 2e Remaster.

## Requisitos
- Node.js 18+
- npm

## Como executar
```bash
npm install
npm run web      # roda no navegador
npm run android  # abre no Android (se emulador/dispositivo conectado)
# npm run ios   # apenas no macOS, use Expo Go como alternativa
```

## Estrutura do projeto
- `app/` — rotas com `expo-router` (`/`, `/character`, `/about`)
- `src/store/characterStore.ts` — estado com Zustand + AsyncStorage (persistência)
- `assets/` — ícones e imagens

## Estado e Persistência
- A ficha é salva localmente via `AsyncStorage` sob a key `pf2e-character`.
- Estado central: dados básicos, atributos, vitais (PV, pontos heróicos, deslocamento).

## Roadmap (alto nível)
- Campos adicionais: proficiências, perícias, talentos, equipamentos, magias, etc.
- Cálculos automáticos (bônus de perícia, CA, TS, DC de classe, etc.).
- Exportar/Importar ficha (JSON).
- Sincronização opcional (cloud) e múltiplos personagens.

## Referências
- Pathbuilder 2e: `https://pathbuilder2e.com/app.html?v=98a`
- Archives of Nethys (AoN PRD): `https://2e.aonprd.com/`

## Licenças e Conteúdo
Este projeto é não-oficial, sem afiliação à Paizo. Para texto completo e termos, consulte o AoN PRD. Nenhum conteúdo fechado é incluído; apenas metadados mínimos e chaves de estrutura.
