import { useState } from 'react'
import usePokemonGame from './hooks/usePokemonGame'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import './App.css'

function App() {
    const { cards, handleClick, score, bestScore, resetGame } = usePokemonGame();

    return (
        <div className="App">
            <ScoreBoard score={score} bestScore={bestScore} />
            <button onClick={resetGame}>Reset Game</button>
            <GameBoard cards={cards} handleClick={handleClick} />
        </div>
    );
}

export default App
