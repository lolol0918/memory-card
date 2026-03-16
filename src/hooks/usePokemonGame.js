import { useEffect, useState } from "react";
import { fetchRandomPokemon } from "../services/pokemonService";
import shuffleCards from "../utils/shuffleCards";

export default function usePokemonGame() {
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [gameReset, setGameReset] = useState(false);

    useEffect(() => {
        async function loadCards() {
            const pokemonCards = await fetchRandomPokemon(10);
            setCards(pokemonCards);
            setScore(0);
        }

        loadCards();
    }, [gameReset]);

    useEffect(() => {
        setBestScore(prevBest => Math.max(prevBest, score));
    }, [score]);

    function handleClick(card) {
        // duplicate click → reset game
        if (clickedCards.includes(card.id)) {
            // clear clicked cards first
            setClickedCards([]);
            setScore(0);
            setGameReset(prev => !prev); // triggers new cards fetch
            return; // stop further execution
        }

        // normal click
        setClickedCards([...clickedCards, card.id]);
        setScore(prev => prev + 1);
        setCards(shuffleCards(cards));
        console.log(clickedCards);
    }
    return { cards, handleClick, score, bestScore, gameReset, setGameReset };
}