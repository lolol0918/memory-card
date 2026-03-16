import { useState } from 'react'
import usePokemonGame from './hooks/usePokemonGame'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import './App.css'

function App() {
    const { cards, handleClick, score, bestScore, resetGame } = usePokemonGame();

    return (
        <div className="App">
            <div className="screen-label">GAME BOY™</div>
            <div className="screen-bezel">
                <div className="screen">
                    <ScoreBoard score={score} bestScore={bestScore} />
                    <GameBoard cards={cards} handleClick={handleClick} />
                </div>
            </div>
            <button onClick={resetGame}>↺ Reset Game</button>
            <div className="speaker">
                <div className="speaker-hole"></div>
                <div className="speaker-hole"></div>
                <div className="speaker-hole"></div>
            </div>
        </div>
    );
}

export default App
