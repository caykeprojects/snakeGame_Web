// ========================================
// INICIALIZAÇÃO DO JOGO
// ========================================

// Obtém o elemento canvas e seu contexto 2D para desenhar
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20; // Tamanho de cada segmento (pixels)

// Inicializa a cobra com um segmento no centro do tabuleiro
let snake = [{ x: 9 * box, y: 10 * box }];

// Direção inicial da cobra
let direction = 'RIGHT';

// Posição aleatória da comida
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};

// Pontuação do jogador
let score = 0;

// Referências aos elementos HTML
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

// Controla se o jogo já foi iniciado
let gameStarted = false;
let game = null;

// ========================================
// EVENT LISTENERS
// ========================================

// Escuta as teclas pressionadas para mudar a direção
document.addEventListener('keydown', changeDirection);

// Escuta o clique no botão de reiniciar
restartButton.addEventListener('click', restartGame);

// ========================================
// FUNÇÃO: MUDAR DIREÇÃO
// ========================================
// Responde aos pressionamentos de seta do teclado
// 37: Seta Esquerda, 38: Seta Cima, 39: Seta Direita, 40: Seta Baixo
function changeDirection(event) {
    const key = event.keyCode;
    
    // Verifica se é uma das setas (37-40)
    const isArrowKey = key >= 37 && key <= 40;
    
    // Inicia o jogo na primeira vez que uma seta é pressionada
    if (isArrowKey && !gameStarted) {
        gameStarted = true;
        game = setInterval(draw, 100);
    }
    
    if (key === 37 && direction !== 'RIGHT') {
        direction = 'LEFT';
    } else if (key === 38 && direction !== 'DOWN') {
        direction = 'UP';
    } else if (key === 39 && direction !== 'LEFT') {
        direction = 'RIGHT';
    } else if (key === 40 && direction !== 'UP') {
        direction = 'DOWN';
    }
}

// ========================================
// FUNÇÃO: DETECTAR COLISÃO
// ========================================
// Verifica se a cabeça colidiu com o corpo da cobra
// Começa em i=1 para não contar a cabeça
function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// ========================================
// FUNÇÃO: REINICIAR JOGO
// ========================================
// Reseta todas as variáveis do jogo para seus valores iniciais
function restartGame() {
    // Reseta a cobra para sua posição inicial
    snake = [{ x: 9 * box, y: 10 * box }];
    
    // Reseta a direção
    direction = 'RIGHT';
    
    // Gera nova comida em posição aleatória
    food = {
        x: Math.floor(Math.random() * 19 + 1) * box,
        y: Math.floor(Math.random() * 19 + 1) * box
    };
    
    // Reseta a pontuação
    score = 0;
    scoreElement.textContent = score;
    
    // Para o intervalo anterior
    clearInterval(game);
    game = null;
    
    // Reseta a flag para aguardar novo início
    gameStarted = false;
}

// ========================================
// FUNÇÃO: DESENHAR E ATUALIZAR JOGO
// ========================================
// Esta é a função principal que é chamada repetidamente (100ms)
function draw() {
    // Limpa o canvas para redesenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha a cobra
    for (let i = 0; i < snake.length; i++) {
        // Cabeça em verde (#32cd32), corpo em branco (#fff)
        ctx.fillStyle = i === 0 ? '#32cd32' : '#fff';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        
        // Contorno vermelho em todos os segmentos
        ctx.strokeStyle = 'red';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Desenha a comida em vermelho
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    // Calcula a nova posição da cabeça baseado na direção
    let head = { ...snake[0] };
    if (direction === 'LEFT') head.x -= box;
    if (direction === 'UP') head.y -= box;
    if (direction === 'RIGHT') head.x += box;
    if (direction === 'DOWN') head.y += box;
    
    // Verifica colisões (paredes ou corpo) ANTES de adicionar a cabeça
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || collision(head, snake)) {
        clearInterval(game);
        alert('Game Over! Your score: ' + score);
        return;
    }
    
    // Verifica se a cobra comeu a comida
    if (head.x === food.x && head.y === food.y) {
        // Aumenta a pontuação
        score++;
        scoreElement.textContent = score;
        
        // Gera nova comida
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        // Se não comeu, remove o último segmento (movimento normal)
        snake.pop();
    }
    
    // Adiciona a nova cabeça ao início da cobra
    snake.unshift(head);
}

// O jogo será iniciado quando o usuário pressionar a primeira seta
// Veja a função changeDirection() para mais detalhes