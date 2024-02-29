class DataService {
    constructor(repository) {
        this.repository = repository;
    }
    async getPelicula() {
        try {
            const data = await this.repository.fetchPelicula();
            return data;
        } catch (error) {
            console.error('Error getting pelicula data:', error);
            return null;
        }
    }
}

