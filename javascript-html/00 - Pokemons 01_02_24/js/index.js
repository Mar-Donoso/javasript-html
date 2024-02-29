document.addEventListener('DOMContentLoaded', () => {
    const repository = new DataRepository();
    const service = new DataService(repository);
    const loadButton = document.getElementById('loadButton');
    const pokemonInfo = document.getElementById('pokemonInfo');

    loadButton.addEventListener('click', async () => {
        const pokemonData = await service.getPokemon('ditto'); // Usamos 1 como ejemplo, pero podría ser cualquier ID
        if (pokemonData) {
            pokemonInfo.innerHTML = `
                <h2>${pokemonData.name}</h2>
                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                <p><strong>Tipo:</strong> ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
            `;
        } else {
            pokemonInfo.innerHTML = `<p>Error al cargar los datos del Pokémon.</p>`;
        }
    });
});