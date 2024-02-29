const $bola = document.getElementById("bola");
const estilosCalculados = window.getComputedStyle($bola);
//let pos = 610;
let pos = estilosCalculados.left;
alert("Antes: " + pos);
pos = pos.substring(0, pos.length - 2);
alert("Después: " + pos);

function moverBola(){
    pos = parseInt(pos) + 100;
    $bola.style.left = pos + "px";
}
function moverPersonaje(){
    setInterval(
        moverBola
    ,1000);
}


function cambiarPeloPersonaje(){
   const $songoku = document.getElementById("songoku");
   console.log("llego");
   $songoku.src="./img/saiyan.jpg";
}

function move(){
    cambiarPeloPersonaje();
    moverPersonaje();
}



