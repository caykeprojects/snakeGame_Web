# 🐍 Snake Game

Um jogo clássico da cobrinha desenvolvido em HTML5, CSS3 e JavaScript puro. Controle a cobra, coma a comida e evite colidir com as paredes ou com o seu próprio corpo!

## 📋 Descrição

Este é um jogo Snake tradicional implementado com Canvas do HTML5. O jogador controla uma cobra que se move continuamente em uma direção e pode mudar de direção usando as setas do teclado. O objetivo é comer o máximo de comida possível sem colidir com as paredes ou com o próprio corpo.

## 🎮 Como Jogar

1. **Abra o arquivo `index.html` em um navegador web**
2. **Use as setas do teclado para controlar a cobra:**
   - ⬅️ **Seta Esquerda** - Mover para a esquerda
   - ⬆️ **Seta Cima** - Mover para cima
   - ➡️ **Seta Direita** - Mover para a direita
   - ⬇️ **Seta Baixo** - Mover para baixo

3. **Objetivo:** Coma a comida vermelha para aumentar sua pontuação e crescer
4. **Game Over:** O jogo termina quando você colide com as paredes ou com seu próprio corpo
5. **Reinicie:** Clique no botão "Restart Game" para jogar novamente

## 🎯 Regras

- A cobra começa com um segmento no centro do tabuleiro
- Cada comida consumida aumenta a pontuação em 1 ponto
- A cobra cresce quando come comida
- O jogo termina ao colidir com:
  - As paredes (bordas do canvas)
  - O próprio corpo da cobra
- A velocidade do jogo é constante (atualização a cada 100ms)

## 🛠️ Arquivos do Projeto

```
SnakeGame_Web/
│
├── index.html       # Estrutura HTML do jogo
├── style.css        # Estilos CSS (gradiente, layout, botões)
├── script.js        # Lógica do jogo em JavaScript
└── README.md        # Este arquivo
```

## 📝 Componentes do Código

### `index.html`
- Estrutura básica da página
- Canvas de 400x400 pixels para o jogo
- Exibição da pontuação
- Botão para reiniciar o jogo

### `style.css`
- Gradiente de fundo (púrpura e vermelho)
- Estilo da interface do jogo
- Design responsivo
- Efeitos hover nos botões

### `script.js`
Contém as seguintes funções principais:

#### `changeDirection(event)`
- Detecta o pressionamento de setas do teclado
- Atualiza a direção da cobra (previne reversão)

#### `collision(head, array)`
- Verifica se a cabeça colidiu com o corpo
- Retorna `true` se houver colisão

#### `restartGame()`
- Reseta todas as variáveis do jogo
- Reinicia o intervalo de atualização
- Limpa a pontuação

#### `draw()`
- Função principal chamada a cada 100ms
- Desenha a cobra e a comida
- Calcula movimento
- Verifica colisões
- Atualiza pontuação

## 🎨 Cores e Design

- **Cabeça da Cobra:** Verde (#32cd32)
- **Corpo da Cobra:** Branco (#fff)
- **Contorno:** Vermelho
- **Comida:** Vermelho
- **Fundo:** Gradiente púrpura-vermelho
- **Fonte:** Press Start 2P (estilo retro)

## 🚀 Melhorias Possíveis

- [ ] Adicionar níveis de dificuldade
- [ ] Implementar sons
- [ ] Salvar highscores
- [ ] Adicionar temas de cores
- [ ] Suporte mobile (touchscreen)
- [ ] Pausar/Resumir jogo
- [ ] Diferentes tamanhos de mapa

## 💻 Requisitos

- Navegador web moderno com suporte a:
  - HTML5 Canvas
  - JavaScript ES6+
  - CSS3 (Flexbox, Gradientes)

## 📦 Como Usar

1. Clone ou baixe o projeto
2. Abra `index.html` em qualquer navegador
3. Comece a jogar!

## 🐛 Correções Realizadas

- ✅ Corrigido `event.keycode` → `event.keyCode` (JavaScript é case-sensitive)
- ✅ Corrigido cor inválida `'#ffff'` → `'#fff'` (hexadecimal válido)
- ✅ Função de restart implementada
- ✅ Lógica de colisão corrigida (não detecta colisão consigo mesmo)
- ✅ Ordem de verificação de colisões otimizada

## 👨‍💻 Autor

Desenvolvido como projeto educacional de JavaScript

---

**Divirta-se jogando! 🎮**
