class DataRepository {
    async fetchPelicula() {
        try {
            const response = await fetch('http://localhost:3000/peliculas');
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Error fetching pelicula data:', err);
            return null;
        }
    }
}
