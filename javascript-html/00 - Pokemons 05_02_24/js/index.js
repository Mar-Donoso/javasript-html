document.addEventListener('DOMContentLoaded', () => {
    const repository = new DataRepository();
    const service = new DataService(repository);
    const loadButton = document.getElementById('loadButton');
    const peliculaInfo = document.getElementById('peliculaInfo');
    
    loadButton.addEventListener('click', async () => {
        const peliculaData = await service.getPelicula();
        console.log(peliculaData);
       
        if (peliculaData) {
            peliculaInfo.innerHTML = '';
            for (let index = 0; index < peliculaData.length; index++) {
                peliculaInfo.innerHTML += `
                <h2>${peliculaData[index].titulo}</h2>
                <img src="${peliculaData[index].imagen}" alt="${peliculaData[index].titulo}">
                <h4>${peliculaData[index].descripcion}</h4>
                `;
            }
        } else {
            peliculaInfo.innerHTML = `<p>Error al cargar los datos de la película.</p>`;
        }
    });
});    
