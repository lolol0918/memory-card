export async function fetchRandomPokemon(count = 10) {
    try {
        // pick `count` random IDs (1–1025)
        const randomIds = Array.from({ length: count }, () =>
            Math.floor(Math.random() * 1025) + 1
        );

        // fetch details for each Pokémon
        const promises = randomIds.map(id =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
        );

        const data = await Promise.all(promises);

        // return only the info we care about the name, id , and the sprites
        return data.map(p => ({
            id: p.id,
            name: p.name,
            img: p.sprites.other["official-artwork"].front_default
        }));
    } catch (err) {
        console.error("Failed to fetch Pokémon", err);
        return [];
    }
}