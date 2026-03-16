// pure helper
export default function shuffleCards(array) {
    return [...array].sort(() => Math.random() - 0.5);
}