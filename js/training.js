function IniciarPrograma(){
    nombre = "";
    edad = 0;
    
    while (true){
        nombre = prompt("¿Ingrese su nombre?");

        if(
            nombre&&/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.trim())

        ){
            nombre=nombre.trim();
            break;
        }
     alert("Nombre invalido. usa solo letras o completa los espacios.")   
    }

    while(true){
        const edadinput = prompt("Cual es su edad");
        edad = Number(edadinput)
        
        if(
            edadinput &&
            !isNaN(edad)&&
            edad > 0
        ){
            break;
        }
        alert("Edad invalida. Ingrese solo numeros >0 o complete los espacios")
    }



    
    if(isNaN(edad)){
        alert("")
    }else{
        if(edad>=18){
            alert(nombre +", Eres mayor de edad.");
        }else{
            alert(nombre+", Eres menor de edad")
        }
    }
}