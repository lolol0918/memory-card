function Card({ card, handleClick }) {
    return (
        <div className="card" onClick={() => handleClick(card)}>
            <img src={card.img} alt={card.name} />
            <p>{card.name}</p>
        </div>
    );
}

export default Card;