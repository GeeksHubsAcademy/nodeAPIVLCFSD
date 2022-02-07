
const axios = require('axios');

const traePersonajes = async () => {

    let resultado = await axios.get("https://rickandmortyapi.com/api/character");

    console.log(resultado.data.results[9].name);
};



traePersonajes();


for(let i = 1; i < 10; i++){
    console.log(i);
}



