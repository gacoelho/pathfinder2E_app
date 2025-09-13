# 🚀 Guia de Deploy para GitHub Pages

Este guia explica como fazer o deploy da aplicação PF2e Remaster para o GitHub Pages.

## 📋 Pré-requisitos

- Conta no GitHub
- Repositório configurado
- Node.js 18+ instalado localmente

## 🔧 Configuração Inicial

### 1. Configurar o Repositório

```bash
# Clone o repositório
git clone https://github.com/<seu-usuario>/<seu-repo>.git
cd <seu-repo>

# Configure o remote (se necessário)
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
```

### 2. Atualizar a Homepage

Edite o arquivo `package.json` e atualize a URL da homepage:

```json
{
  "homepage": "https://<seu-usuario>.github.io/<seu-repo>"
}
```

## 🚀 Deploy Manual

### Opção 1: Deploy via npm script (Recomendado)

```bash
# Instalar dependências
npm install

# Fazer o build e deploy
npm run deploy
```

Este comando irá:
1. Gerar o build otimizado para web (`dist/`)
2. Publicar na branch `gh-pages`
3. Tornar o site disponível automaticamente

### Opção 2: Deploy manual

```bash
# Instalar dependências
npm install

# Gerar build
npm run build:web

# Adicionar arquivo .nojekyll
touch dist/.nojekyll

# Fazer commit e push da branch gh-pages
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M main
git push -f origin main:gh-pages
```

## 🤖 Deploy Automático com GitHub Actions

O projeto inclui um workflow do GitHub Actions que faz deploy automático quando você faz push para a branch `main`.

### Configuração

1. **Habilite o GitHub Pages no repositório:**
   - Vá para Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

2. **Configure as permissões:**
   - Vá para Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to create and approve pull requests: ✅

3. **Faça push para a branch main:**
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Actions"
   git push origin main
   ```

O deploy será feito automaticamente em alguns minutos.

## 🔍 Verificação do Deploy

Após o deploy, acesse:
```
https://<seu-usuario>.github.io/<seu-repo>
```

### Problemas Comuns

**1. 404 Error**
- Verifique se a homepage no `package.json` está correta
- Confirme se a branch `gh-pages` existe e tem conteúdo

**2. Assets não carregam**
- Certifique-se de que o arquivo `.nojekyll` está presente em `dist/`
- Verifique se os caminhos dos assets estão corretos

**3. Build falha**
- Execute `npm run typecheck` para verificar erros de TypeScript
- Verifique se todas as dependências estão instaladas

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run web          # Rodar em desenvolvimento
npm run typecheck    # Verificar tipos TypeScript
npm run lint         # Verificar código
npm run format       # Formatar código

# Build e Deploy
npm run build:web    # Build para produção
npm run serve        # Servir build localmente
npm run deploy       # Deploy completo
```

## 📱 PWA e Funcionalidades

O site inclui:
- ✅ **PWA Ready**: Pode ser instalado como app
- ✅ **Service Worker**: Cache offline
- ✅ **Manifest**: Metadados para instalação
- ✅ **Responsive**: Funciona em mobile e desktop
- ✅ **SEO**: Meta tags otimizadas

## 🔄 Atualizações

Para atualizar o site:

1. Faça suas alterações no código
2. Teste localmente: `npm run web`
3. Faça commit e push:
   ```bash
   git add .
   git commit -m "Update: descrição das mudanças"
   git push origin main
   ```
4. O deploy será feito automaticamente via GitHub Actions

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do GitHub Actions
2. Teste localmente com `npm run serve`
3. Abra uma issue no repositório

---

**🎉 Parabéns! Seu site PF2e Remaster está no ar!**