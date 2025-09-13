# 🎲 PF2e Remaster — Criador de Fichas de Personagem

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobile-lightgrey.svg)

Uma aplicação moderna e intuitiva para criação e gerenciamento de fichas de personagem para **Pathfinder 2e Remaster**. Desenvolvida com React Native e Expo, funciona perfeitamente em navegadores web e dispositivos móveis.

## ✨ Funcionalidades

- 🎯 **Interface Moderna**: Design limpo e responsivo
- 📝 **Ficha Completa**: Informações básicas, atributos e vitais
- 🧮 **Cálculos Automáticos**: Modificadores de atributo calculados automaticamente
- 💾 **Salvamento Local**: Dados persistidos no navegador
- 📱 **Multiplataforma**: Funciona em desktop, tablet e mobile
- 🔄 **Reset Fácil**: Botão para resetar e começar do zero
- 🌐 **PWA Ready**: Pode ser instalado como aplicativo

## 🚀 Demonstração

**[🔗 Acesse o site ao vivo](https://gacoelho.github.io/pathfinder2E_app/)**

## 📋 Requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Como executar

### Instalação
```bash
git clone https://github.com/gacoelho/pathfinder2E_app.git
cd pf2e-remaster
npm install
```

### Desenvolvimento
```bash
npm run web      # roda no navegador
npm run android  # abre no Android (se emulador/dispositivo conectado)
npm run ios      # apenas no macOS, use Expo Go como alternativa
```

### Build para produção
```bash
npm run build:web  # gera build otimizado para web
npm run serve      # serve o build localmente para teste
```

## 📁 Estrutura do projeto

```
pf2e-remaster/
├── app/                    # Rotas com expo-router
│   ├── index.tsx          # Página inicial
│   ├── character.tsx      # Editor de ficha
│   ├── about.tsx          # Página sobre
│   └── _layout.tsx        # Layout principal
├── src/
│   └── store/
│       └── characterStore.ts  # Estado com Zustand + AsyncStorage
├── public/                # Arquivos estáticos
│   ├── index.html         # HTML customizado
│   ├── manifest.json      # PWA manifest
│   └── sw.js             # Service Worker
├── assets/               # Ícones e imagens
└── docs/                 # Documentação
```

## 🎮 Como usar

1. **Acesse o site** ou abra a aplicação
2. **Clique em "Criar Nova Ficha"** para começar
3. **Preencha as informações básicas** do personagem
4. **Configure os atributos** - os modificadores são calculados automaticamente
5. **Defina os vitais** (PV, pontos heróicos, deslocamento)
6. **Seus dados são salvos automaticamente** no navegador

## 🛠️ Tecnologias utilizadas

- **⚛️ React Native** - Framework principal
- **📱 Expo** - Plataforma de desenvolvimento
- **🔄 Zustand** - Gerenciamento de estado
- **💾 AsyncStorage** - Persistência de dados
- **🌐 React Native Web** - Suporte para web
- **📝 TypeScript** - Tipagem estática
- **🎨 CSS-in-JS** - Estilização com StyleSheet

## 📦 Deploy no GitHub Pages

### Configuração inicial
```bash
# Configure o repositório remoto
git init
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git

# Ajuste a homepage no package.json
# "homepage": "https://<seu-usuario>.github.io/<seu-repo>"
```

### Deploy automático
```bash
npm run deploy
```

Isso irá:
1. Gerar o build otimizado (`dist/`)
2. Publicar na branch `gh-pages`
3. Tornar o site disponível em `https://<seu-usuario>.github.io/<seu-repo>`

## 🎯 Roadmap

### Próximas funcionalidades
- [ ] **Perícias e Proficiências**: Sistema completo de perícias
- [ ] **Talentos e Feats**: Gerenciamento de talentos de classe e gerais
- [ ] **Equipamentos**: Inventário e equipamentos
- [ ] **Magias**: Sistema de magias e slots
- [ ] **Exportar/Importar**: Backup das fichas em JSON
- [ ] **Múltiplos Personagens**: Gerenciar várias fichas
- [ ] **Cálculos Avançados**: CA, TS, DC de classe automáticos
- [ ] **Temas**: Modo escuro e personalização visual

### Melhorias técnicas
- [ ] **Testes**: Testes unitários e de integração
- [ ] **Performance**: Otimizações e lazy loading
- [ ] **Acessibilidade**: Melhor suporte a screen readers
- [ ] **Internacionalização**: Suporte a múltiplos idiomas

## 🔗 Referências e Recursos

- **🏗️ [Pathbuilder 2e](https://pathbuilder2e.com/)** - Ferramenta oficial (inspiração)
- **📚 [Archives of Nethys](https://2e.aonprd.com/)** - Site oficial com regras
- **🎲 [Paizo Publishing](https://paizo.com/)** - Editora oficial do Pathfinder 2e
- **📖 [Documentação do Expo](https://docs.expo.dev/)** - Guias de desenvolvimento

## ⚖️ Licenças e Avisos

**⚠️ Aviso Legal**: Este projeto é não-oficial e não possui afiliação com a Paizo Publishing, LLC.

**📄 Conteúdo**: Nenhum conteúdo protegido por direitos autorais é incluído. Apenas metadados mínimos e estruturas de dados são utilizados.

**📋 Regras**: Para o texto completo das regras, consulte o Archives of Nethys ou os livros oficiais da Paizo.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. **Reportar bugs** através de issues
2. **Sugerir funcionalidades** novas
3. **Enviar pull requests** com melhorias
4. **Compartilhar feedback** sobre a experiência

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para a comunidade Pathfinder 2e**

*Versão 1.0.0 • 2024*
