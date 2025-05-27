let arvores = []; // Array para armazenar as árvores
let cidadeX; // Posição X da cidade

function setup() {
  createCanvas(800, 400); // Cria a área de desenho
  cidadeX = width / 2; // Define a posição inicial da cidade no meio da tela
}

function draw() {
  background(135, 206, 235); // Cor do céu (azul claro)

  // Campo verde
  noStroke(); // Remove o contorno
  fill(144, 238, 144); // Cor do campo (verde claro)
  rect(0, height / 2, width, height / 2); // Desenha o retângulo do campo

  // Sol
  fill(255, 223, 0); // Cor do sol (amarelo)
  ellipse(80, 80, 80); // Desenha o círculo do sol

  // Cidade (prédios)
  for (let i = 0; i < 5; i++) {
    let predioX = cidadeX + i * 40; // Posição X do prédio atual
    let predioY = height / 2 - 100; // Posição Y do topo do prédio
    let predioLargura = 30; // Largura do prédio
    let predioAltura = 100; // Altura do prédio

    fill(100); // Cor dos prédios (cinza escuro)
    // Desenha cada prédio
    rect(predioX, predioY, predioLargura, predioAltura);

    // Adiciona janelas aos prédios
    fill(200, 200, 0); // Cor das janelas (amarelo claro para simular luz)
    // Loop para desenhar várias janelas em cada prédio
    for (let j = 0; j < 3; j++) { // 3 linhas de janelas
      for (let k = 0; k < 2; k++) { // 2 colunas de janelas
        let janelaLargura = 8;
        let janelaAltura = 12;
        let espacamentoX = 5;
        let espacamentoY = 10;

        // Calcula a posição da janela
        let janelaX = predioX + espacamentoX + k * (janelaLargura + espacamentoX);
        let janelaY = predioY + espacamentoY + j * (janelaAltura + espacamentoY);

        // Desenha a janela
        rect(janelaX, janelaY, janelaLargura, janelaAltura);
      }
    }
  }

  // Campo (árvores)
  // Itera sobre o array de árvores e chama o método 'mostrar' para cada uma
  for (let arvore of arvores) {
    arvore.mostrar();
  }
}

// Função chamada quando o mouse é pressionado
function mousePressed() {
  // Verifica se o clique foi na área do campo e à esquerda da cidade
  if (mouseY > height / 2 && mouseX < cidadeX) {
    // Adiciona uma nova árvore na posição do mouse
    arvores.push(new Arvore(mouseX, mouseY));
  }
}

// ---
// Classe Arvore
class Arvore {
  constructor(x, y) {
    this.x = x; // Posição X da árvore
    this.y = y; // Posição Y da árvore (base do tronco)
    this.altura = 0; // Altura atual da árvore (para animação de crescimento)
  }

  mostrar() {
    // Anima a altura da árvore, crescendo até 50 pixels
    this.altura = min(this.altura + 1, 50);

    // Desenha o tronco da árvore
    fill(139, 69, 19); // Cor do tronco (marrom)
    // Desenha o tronco um pouco mais largo na base
    rect(this.x - 5, this.y - this.altura, 10, this.altura);

    // Desenha a copa da árvore com múltiplas elipses para um visual mais cheio
    fill(34, 139, 34); // Cor das folhas (verde floresta)
    noStroke(); // Remove o contorno das folhas

    // Elipses sobrepostas para criar uma forma mais orgânica
    ellipse(this.x, this.y - this.altura - 10, 30, 35); // Elipse central
    ellipse(this.x - 10, this.y - this.altura - 5, 25, 30); // Elipse à esquerda
    ellipse(this.x + 10, this.y - this.altura - 5, 25, 30); // Elipse à direita
    ellipse(this.x, this.y - this.altura - 20, 20, 25); // Elipse superior
  }
}
