import { useEffect, useState } from "react";
import { fetchRandomPokemon } from "../services/pokemonService";
import shuffleCards from "../utils/shuffleCards";

export default function usePokemonGame() {
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
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

    function handleClick(card) {
        if (clickedCards.includes(cards.id)) {
            setGameReset(prev => !prev); //resets game
        } else {
            setClickedCards([...clickedCards, card.id]);
            setScore(prev => prev + 1);
            setCards(shuffleCards(cards));
        }
    }
    return { cards, handleClick, score, gameReset, setGameReset };
}