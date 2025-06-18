// Variáveis do jogo
let score = 0; // Inicializa a pontuação
let startTime; // Tempo de início do jogo
let gameDuration = 60; // Duração do jogo em segundos
let gameOver = false; // Flag para verificar se o jogo terminou
let treeEmoji = "🌳"; // Emoji da árvore
let speedFactor = 2; // Fator para acelerar o tempo do jogo

let trees = []; // Array para armazenar as posições das árvores que aparecem

// Função de configuração - executa uma vez quando o programa inicia
function setup() {
  createCanvas(400, 400); // Cria uma tela de 400x400 pixels
  startTime = millis(); // Marca o tempo atual em milissegundos como o início do jogo
  textAlign(CENTER, CENTER); // Alinha o texto ao centro
  textSize(48); // Define o tamanho da fonte para o emoji da árvore
}

// Função de desenho - executa continuamente (cerca de 60 vezes por segundo)
function draw() {
  // Calcula o tempo decorrido, acelerando-o pelo speedFactor
  let elapsedTime = (millis() - startTime) / 1000 * speedFactor;

  // Verifica se o tempo de jogo ainda não terminou
  if (elapsedTime < gameDuration) {
    // Desenha o fundo dividido: céu azul claro e terra verde claro
    background(135, 206, 235); // Cor azul claro para o céu
    fill(144, 238, 144); // Cor verde claro para a terra
    rect(0, height / 2, width, height / 2); // Desenha a "terra" na metade inferior da tela

    // Mostra a pontuação no topo da tela
    fill(0); // Cor preta para o texto
    textSize(24); // Tamanho da fonte para a pontuação
    text("Pontuação: " + score, width / 2, 30);

    // Mostra o tempo restante no céu (parte superior da tela)
    let remainingTime = int(gameDuration - elapsedTime); // Calcula o tempo restante e converte para inteiro
    text("Tempo: " + remainingTime, width / 2, 60); // Posição Y ajustada para o céu

    // Desenha todas as árvores que foram clicadas e armazenadas no array 'trees'
    textSize(48); // Redefine o tamanho da fonte para o emoji da árvore
    for (let i = 0; i < trees.length; i++) {
      text(treeEmoji, trees[i].x, trees[i].y); // Desenha cada árvore na sua posição
    }

  } else {
    // Se o tempo terminou, o jogo acaba
    gameOver = true;
    background(255); // Fundo branco para a tela de "Game Over"
    fill(0); // Cor preta para o texto
    textSize(32); // Tamanho da fonte para "Game Over!"
    text("Fim do Jogo!", width / 2, height / 2 - 40);
    textSize(24); // Tamanho da fonte para a pontuação final
    text("Pontuação Final: " + score, width / 2, height / 2 + 20);
  }
}

// Função que é chamada sempre que o rato é clicado
function mousePressed() {
  // Apenas permite cliques se o jogo não tiver terminado
  if (!gameOver) {
    score++; // Incrementa a pontuação a cada clique

    // Gera uma posição aleatória para a nova árvore dentro da área da "terra" (verde)
    let randomX = random(0, width); // Posição X aleatória em toda a largura da tela
    let randomY = random(height / 2, height); // Posição Y aleatória na metade inferior da tela (terra)

    // Adiciona as coordenadas da nova árvore ao array 'trees'
    trees.push({ x: randomX, y: randomY });
  }
}
