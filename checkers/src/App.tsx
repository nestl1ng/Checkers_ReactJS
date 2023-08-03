import { useEffect } from 'react';
import {useState} from "react"
import './App.css';
import BoardComp from './components/BoardComp';
import { Board } from "./models/Board";
import { Player } from './models/Player';
import { Colors } from './models/Colors';

const App = () => {

const [board, setBoard] = useState(new Board());
const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
const [currentPlayer, setCurrentPlayer] = useState<Player|null>(null);

useEffect(() => {
  restart();
  setCurrentPlayer(whitePlayer);
}, [])


function restart(){
  const newBoard = new Board();
  newBoard.initCells();
  newBoard.addFigures();
  setBoard(newBoard);
}

function swapPlayer(){
  setCurrentPlayer(currentPlayer?.color===Colors.WHITE?blackPlayer : whitePlayer);
}

  return (
    <div className='App'>
      <BoardComp 
      board={board} 
      setBoard={setBoard}
      currentPlayer={currentPlayer}
      swapPlayer={swapPlayer}
      />
    </div>
  )
}
export default App;
