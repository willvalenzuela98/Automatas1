let nombre;
let nombreValido = "abcdefjklmopqrst";

function ValidarN (nombreValido, nombre){
    nombre = document.getElementById('nombre').value;
    const conjuntoP = new Set(nombreValido);
    let validador;
    for(let i = 0; i<=nombre.length; i++){
        if(!conjuntoP.has(i)){
            validador = true;
        }
    }
    validador = false;
    
    if(validador = true){
        console.log("es valido");
    }else{
        console.log("no es valido");
    }

}


