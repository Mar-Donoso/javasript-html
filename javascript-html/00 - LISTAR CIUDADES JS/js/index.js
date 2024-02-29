const $container = document.getElementById("container");
const $ciudades = document.getElementById("ciudades");
initComponents();

function initComponents(){
    // 1º) Objetivo de hoy: DESACOPLAR EVENTOS DEL HTML
    $container.addEventListener(
        "click", 
        ()=>{ // FUNCIÓN FLECHA, CAMINO A TYPESCRIPT
            alert("saludar");
            $container.style.backgroundColor = "yellow";
        }
    );
    $ciudades.addEventListener(
        "change",
        ()=>{
            let index = $ciudades.selectedIndex;
            alert(`Pos seleccionada ${index}`);

            if(index===0){
                alert("Selecciona una ciudad");
            }else{
                let ciudadSeleccionada = $ciudades.options[index].text;
                alert(`Ciudad = ${ciudadSeleccionada}`);
            }
        }
    );
}


function saludar(){
    alert("Soy el div contenedor!!");
    $container.style.backgroundColor = "yellow";
}

function initEvents(){

}

