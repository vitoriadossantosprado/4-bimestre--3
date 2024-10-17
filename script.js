let score = 0;
let flippedCards = 0;
let currentSet = 0;

// Conjuntos de perguntas e respostas
const cardSets = [
    [
        { question: "O que é HTML?", answer: "Linguagem de marcação usada para criar páginas web" },
        { question: "O que é CSS?", answer: "Folhas de estilo usadas para definir o design de páginas web" },
        { question: "O que é JavaScript?", answer: "Linguagem de programação usada para adicionar interatividade em páginas web" },
        { question: "O que é uma variável?", answer: "Um contêiner para armazenar dados que podem mudar durante a execução do programa" },
        { question: "O que é um loop?", answer: "Uma estrutura que repete um bloco de código até uma condição ser satisfeita" },
        { question: "O que é uma função?", answer: "Um bloco de código reutilizável que executa uma tarefa específica" }
    ],
    [
        { question: "O que é um Array?", answer: "Uma estrutura de dados que armazena uma lista de valores" },
        { question: "O que é um Objeto?", answer: "Uma coleção de propriedades que representam características de algo" },
        { question: "O que é uma API?", answer: "Interface de programação de aplicativos usada para comunicação entre softwares" },
        { question: "O que é um Framework?", answer: "Um conjunto de ferramentas e bibliotecas que facilitam o desenvolvimento de software" },
        { question: "O que é React?", answer: "Uma biblioteca JavaScript para construir interfaces de usuário" },
        { question: "O que é Node.js?", answer: "Um ambiente de execução para JavaScript fora do navegador" }
    ]
];

function flipCard(card) {
    if (!card.classList.contains('flip')) {
        card.classList.add('flip');
        score += 10;
        flippedCards++;
        updateScore();
        
        if (flippedCards === 6) {  // Todas as cartas foram viradas
            setTimeout(() => {
                alert('Você virou todas as cartas! Pontuação final: ' + score);
                loadNextSet();  // Carrega o próximo conjunto de perguntas
            }, 500);
        }
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function resetGame() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('flip'));
    score = 0;
    flippedCards = 0;
    updateScore();
}

function loadNextSet() {
    // Reinicia o estado do jogo
    resetGame();

    // Avança para o próximo conjunto de perguntas
    currentSet = (currentSet + 1) % cardSets.length;  // Cicla pelos conjuntos

    const cards = document.querySelectorAll('.card');
    const newSet = cardSets[currentSet];

    // Atualiza o conteúdo das cartas com o novo conjunto
    cards.forEach((card, index) => {
        const questionElement = card.querySelector('.card-front h2');
        const answerElement = card.querySelector('.card-back h2');
        
        questionElement.textContent = newSet[index].question;
        answerElement.textContent = newSet[index].answer;
    });
}

// Inicializa o primeiro conjunto de perguntas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadNextSet();
});