let currentPlayer = "X";
let gameOver = false;
let board = [["", "", ""], ["", "", ""], ["", "", ""]];
const winnerMessage = document.getElementById("winner-message");

function makeMove(row, col) {
    if (!gameOver && board[row][col] === "") {
        board[row][col] = currentPlayer;
        document.querySelector(".tic-tac-toe").children[row].children[col].textContent = currentPlayer;
        
        if (checkWin(row, col)) {
            winnerMessage.textContent = currentPlayer + " wins!";
            gameOver = true;
        } else if (boardIsFull()) {
            winnerMessage.textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin(row, col) {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (const [dx, dy] of directions) {
        let count = 1;
        for (let i = -1; i <= 1; i += 2) {
            let r = row + dx * i;
            let c = col + dy * i;
            while (r >= 0 && r < 3 && c >= 0 && c < 3 && board[r][c] === currentPlayer) {
                count++;
                r += dx * i;
                c += dy * i;
            }
        }
        if (count >= 3) {
            return true;
        }
    }
    return false;
}

function boardIsFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === "") {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
    currentPlayer = "X";
    gameOver = false;
    winnerMessage.textContent = "";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}

resetGame();
