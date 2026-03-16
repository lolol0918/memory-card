import Card from "./Card";

function GameBoard({ cards, handleClick }) {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}

export default GameBoard;