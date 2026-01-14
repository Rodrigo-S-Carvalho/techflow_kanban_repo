const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistoryBtn");

const history =
    JSON.parse(sessionStorage.getItem("matchHistory")) || [];

if (history.length === 0) {
    historyList.innerHTML = "<li>Nenhuma partida registrada.</li>";
} else {
    history.forEach(match => {
        const li = document.createElement("li");
        li.textContent = `${match.date} • ${match.time} — ${match.winner}`;
        historyList.appendChild(li);
    });
}

clearBtn.addEventListener("click", () => {
    const confirmClear = confirm("Deseja apagar todo o histórico?");
    if (confirmClear) {
        sessionStorage.removeItem("matchHistory");
        location.reload();
    }
});
