function Card({ card, handleClick }) {
    return (
        <div className="card" onClick={() => handleClick(card)}>
            <img src={card.image} alt="card" />
        </div>
    );
}

export default Card;