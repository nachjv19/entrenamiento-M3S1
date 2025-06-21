//creamos una funcion para poder utilizarla mediante un boton u otro elemento en html.
function iniApp() {
    // creamos las variables definidas desde el inicio para control de errores y evitar un undefined cuando el codigo este en ejecucion.
    let name = " ";
    let age = 0;
    // creamos una condicion con un bolean para crear una validacion dentro de un bucle, este al recibir los datos esperados pasa de false a true y el codigo continua.
    let checkName = false;
    let checkAge = false;
    //ciclo validacion de nombre.
    while(!checkName){
      name = prompt("What is your Name?: ")
         //este lo agregamos darle funcionalidad al boton cancelar por lo que el usuario pueda elegir cerrar el programa en cualquier etapa.
        if (name === null) {
            alert("closed app"); //mensaje de programa finalizado.
            return;
        }
        //en esta parte hacemos una validacion para que el programa solo reciba letras validas, no espacio ni teclas especiales.
     if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())) {
        name = name.trim();
         ValidName = true;
         } else {
         alert("Error: letters only.") // mensaje de error - esta funcion devuelve el bucle nuevamente hasta ingresar los datos esperados
        }
    }
    // en esta parte hacemos un validacion para que el programa valide la edad.
    while(!checkAge){
        const ageInput = prompt("What is your age?: ") // esta funcion solo existe dentro del bucle, esto nos permite tomar los datos que ingrese el usuario para realizar nuestra validacion.
        //este lo agregamos darle funcionalidad al boton cancelar por lo que el usuario pueda elegir cerrar el programa en cualquier etapa.
        if(ageInput === null){
            alert("closed app");
            return;
        }
        age = Number(ageInput);//esta funcion nos permite convertir string a number ya que prompt siempre convierte a string por lo que solo generamos una conversion de "25" => 25(number)

        //en esta parte validamos si el usuario ingresa un valor valido, y si es valido convierte nuestro ValidAge = false => True, por lo que nuestro sistema continua.
        //si no genera un mensaje de error y devuelve el bucle.
        if (!isNaN(age)&& age > 0){
            ValidAge = true
        }else {
            alert("Error: numbers only");
        }
    }

    //aqui validamos los datos del usuario, si es >=18 o <18, dependiendo el caso genera un mensaje.
    if(age>=18){
        alert(`${name}, adult`);
    }else {
        alert (`${name}, child`);
    }
}




    






