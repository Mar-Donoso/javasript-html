function displayPokemon(data){
    const pokemonInfo = document.getElementById('pokemonInfo');
    let cad = '';
    cad += `<h2> ${data.height} </h2>`;
    /*data.abilities[0].ability.name;
    data.species.name;
    data.species.url;*/
        cad += `<h2> ${data.weight} </h2>`;
        cad += `<h2> ${data.abilities[0].ability.name} </h2>`;
        cad += `<h2> ${data.species.name} </h2>`;
        cad += `<h2> ${data.species.url} </h2>`;
    pokemonInfo.innerHTML = cad;
}
document.getElementById('loadButton').addEventListener('click', ()=>{
    document.getElementById('pokemonInfo').innerHTML = 'Cargando...';   
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').
    then(response => response.json()).
    then((data) => {
        displayPokemon(data);
    })
    .catch(error => {
        console.log('error');
        alert('Error al cargar los datos!!');
    });
    // https://pokeapi.co/api/v2/pokemon/ditto
});