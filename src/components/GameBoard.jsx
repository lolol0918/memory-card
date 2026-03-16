import Card from "./Card";

function GameBoard({ cards, handleClick }) {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    key={card.id}          // unique key
                    card={card}            // pass the actual card object
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}

export default GameBoard;