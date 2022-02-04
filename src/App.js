import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Components/Patterns";

function App() {
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [player, setPlayer] = useState("〇");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  //board = ["","","", "","","", "","",""]
  const chooseSquare = (square) => {
    setBoard(
      //set the square to the player's symbol
      board.map((val, idx) => {
        if (idx === square && val === "") return player;
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      pattern.forEach((index) => {
        if (board[index] !== firstPlayer) foundWinningPattern = false;
      });

      if (foundWinningPattern) {
        setResult({
          winner: player,
          state: "won",
        });
      }
    });
  };

  //calling checkWin every time board updates
  useEffect(() => {
    checkWin();
    //update player to be the other
    player === "✖" ? setPlayer("〇") : setPlayer("✖");
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
    }
  }, [result]);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
