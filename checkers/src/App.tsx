import { useEffect } from 'react';
import React, {useState} from "react"
import './App.css';
import BoardComp from './components/BoardComp';
import { Board } from "./models/Board";

const App = () => {

const [board, setBoard] = useState(new Board());

useEffect(() => {
  restart();
}, [])


function restart(){
  const newBoard = new Board();
  newBoard.initCells();
  setBoard(newBoard);
}

  return (
    <div className='App'>
      <BoardComp board={board} setBoard={setBoard}/>
    </div>
  )
}
export default App;