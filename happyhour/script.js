const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const setup = document.getElementById("setup");
const startGameBtn = document.getElementById("startGameBtn");

const playerNameInput = document.getElementById("playerName");
const charCount = document.getElementById("charCount");

const scoreboard = document.getElementById("scoreboard");
const playerLabel = document.getElementById("playerLabel");

const resetBtn = document.getElementById("resetBtn");

const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");

let boardState = Array(9).fill("");
let gameActive = false;

let PLAYER = "X";
let CPU = "O";

let playerScore = 0;
let cpuScore = 0;

let matchCount = 0; // controla partidas ímpares / pares
let currentTurn = "PLAYER"; // PLAYER ou CPU

const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

//Exibir informações do usuário
document.getElementById("userEmail").textContent =
    sessionStorage.getItem("userEmail");

/* CONTADOR DE CARACTERES */
playerNameInput.addEventListener("input", () => {
    const remaining = 20 - playerNameInput.value.length;
    charCount.textContent = `${remaining} caracteres restantes`;
});

/* INICIAR JOGO */
startGameBtn.addEventListener("click", () => {
    const name = playerNameInput.value.trim();
    if (!name) {
        alert("Digite um nome para começar.");
        return;
    }

    PLAYER = document.querySelector('input[name="symbol"]:checked').value;
    CPU = PLAYER === "X" ? "O" : "X";

    playerLabel.textContent = name;

    setup.classList.add("hidden");
    scoreboard.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    board.classList.remove("disabled");

    startNewMatch();
});

/* EVENTOS DO TABULEIRO */
cells.forEach(cell => {
    cell.addEventListener("click", playerMove);
});

resetBtn.addEventListener("click", startNewMatch);

/* CONTROLE DE PARTIDAS */
function startNewMatch() {
    matchCount++;
    resetBoard();

    if (matchCount % 2 === 1) {
        currentTurn = "PLAYER";
        alert(`${playerLabel.textContent} começa esta partida.`);
    } else {
        currentTurn = "CPU";
        alert(`A CPU começa esta partida.`);
        setTimeout(cpuMove, 500);
    }

    gameActive = true;
}

/* MOVIMENTO DO JOGADOR */
function playerMove(e) {
    const index = e.target.dataset.index;

    if (!gameActive) return;
    if (currentTurn !== "PLAYER") return;
    if (boardState[index] !== "") return;

    makeMove(index, PLAYER);
    if (checkGameEnd(PLAYER)) return;

    currentTurn = "CPU";
    setTimeout(cpuMove, 400);
}

/* MOVIMENTO DA CPU */
function cpuMove() {
    if (!gameActive) return;
    if (currentTurn !== "CPU") return;

    const move = findBestMove();
    makeMove(move, CPU);
    if (checkGameEnd(CPU)) return;

    currentTurn = "PLAYER";
}

/* FUNÇÕES AUXILIARES */
function makeMove(index, symbol) {
    boardState[index] = symbol;
    cells[index].textContent = symbol;
    cells[index].classList.add("taken");
}

function checkGameEnd(symbol) {
    if (checkWin(symbol)) {
        gameActive = false;

    if (symbol === PLAYER) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        statusText.textContent = `${playerLabel.textContent} venceu!`;
        saveMatchResult(playerLabel.textContent);
    } else {
        cpuScore++;
        cpuScoreEl.textContent = cpuScore;
        statusText.textContent = "A CPU venceu!";
        saveMatchResult("CPU");
    }
        return true;
    }

    if (!boardState.includes("")) {
        gameActive = false;
        statusText.textContent = "Empate!";
        saveMatchResult("Empate");
        return true;
    }
    return false;

}

function checkWin(symbol) {
    return winConditions.some(combo =>
        combo.every(i => boardState[i] === symbol)
    );
}

function findBestMove() {
    // Tentar ganhar
    for (let i = 0; i < 9; i++) {
        if (boardState[i] === "") {
            boardState[i] = CPU;
            if (checkWin(CPU)) {
                boardState[i] = "";
                return i;
            }
            boardState[i] = "";
        }
    }

    // Bloquear jogador
    for (let i = 0; i < 9; i++) {
        if (boardState[i] === "") {
            boardState[i] = PLAYER;
            if (checkWin(PLAYER)) {
                boardState[i] = "";
                return i;
            }
            boardState[i] = "";
        }
    }

    // Aleatório
    const empty = boardState
        .map((v, i) => v === "" ? i : null)
        .filter(v => v !== null);

    return empty[Math.floor(Math.random() * empty.length)];
}

function resetBoard() {
    boardState = Array(9).fill("");
    statusText.textContent = "";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });

    
}

//SALVAR RESULTADO DA PARTIDA EM HISTÓRICO
function saveMatchResult(winner) {
    const history =
        JSON.parse(sessionStorage.getItem("matchHistory")) || [];

    const now = new Date();

    history.push({
        date: now.toLocaleDateString("pt-BR"),
        time: now.toLocaleTimeString("pt-BR"),
        winner: winner
    });

    sessionStorage.setItem("matchHistory", JSON.stringify(history));
}

//OPÇÃO DE EXCLUIR CONTA
document.getElementById("deleteAccountBtn").addEventListener("click", () => {
    const confirmDelete = confirm(
        "Tem certeza que deseja excluir a conta? Todos os dados da sessão serão perdidos."
    );

    if (confirmDelete) {
        logoutUser();
    }
});

//OPÇÃO DE LOGOUT
document.getElementById("logoutBtn").addEventListener("click", () => {
    const confirmLogout = confirm("Deseja sair da conta?");
    if (confirmLogout) {
        logoutUser();
    }
});

//ABRIR HISTÓRICO DE PARTIDAS
document.getElementById("historyBtn").addEventListener("click", () => {
    window.open(
        "placar.html",
        "placar",
        "width=420,height=500"
    );
});
