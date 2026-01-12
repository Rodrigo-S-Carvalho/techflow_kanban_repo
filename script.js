const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");

let boardState = Array(9).fill("");
let gameActive = true;

let playerScore = 0;
let cpuScore = 0;

const PLAYER = "X";
const CPU = "O";

const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", playerMove);
});

resetBtn.addEventListener("click", resetGame);

function playerMove(e) {
    const index = e.target.dataset.index;

    if (!gameActive || boardState[index] !== "") return;

    makeMove(index, PLAYER);
    if (checkGameEnd(PLAYER)) return;

    setTimeout(cpuMove, 400);
}

function cpuMove() {
    if (!gameActive) return;

    let move = findBestMove();
    makeMove(move, CPU);
    checkGameEnd(CPU);
}

function makeMove(index, player) {
    boardState[index] = player;
    cells[index].textContent = player;
    cells[index].classList.add("taken");
}

function checkGameEnd(player) {
    if (checkWin(player)) {
        gameActive = false;
        if (player === PLAYER) {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            statusText.textContent = "Você venceu!";
        } else {
            cpuScore++;
            cpuScoreEl.textContent = cpuScore;
            statusText.textContent = "A CPU venceu!";
        }
        return true;
    }

    if (!boardState.includes("")) {
        gameActive = false;
        statusText.textContent = "Empate!";
        return true;
    }
    return false;
}

function checkWin(player) {
    return winConditions.some(condition =>
        condition.every(index => boardState[index] === player)
    );
}

function findBestMove() {
    // Tentar ganhar
    for (let i = 0; i < boardState.length; i++) {
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
    for (let i = 0; i < boardState.length; i++) {
        if (boardState[i] === "") {
            boardState[i] = PLAYER;
            if (checkWin(PLAYER)) {
                boardState[i] = "";
                return i;
            }
            boardState[i] = "";
        }
    }

    // Jogada aleatória
    const emptyCells = boardState
        .map((v, i) => v === "" ? i : null)
        .filter(v => v !== null);

    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function resetGame() {
    boardState = Array(9).fill("");
    gameActive = true;
    statusText.textContent = "";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
}
