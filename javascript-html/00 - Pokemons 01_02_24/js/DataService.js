class DataService {
    constructor(repository) {
        this.repository = repository;
    }

    async getPokemon(pokemonId) {
        try {
            const data = await this.repository.fetchPokemon(pokemonId);
            return data; // Aquí puedes añadir lógica para procesar los datos si es necesario
        } catch (error) {
            console.error('Error getting pokemon data:', error);
        }
    }
}
