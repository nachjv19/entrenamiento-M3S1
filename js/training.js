function iniApp() {
    let name = " ";
    let age = 0;
    let checkName = false;
    let checkAge = false;

    while(!checkName){
      name = prompt("What is your Name?: ")

        if (name === null) {
            alert("closed app");
            return;
        }

     if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())) {
        name = name.trim();
         ValidName = true;
         } else {
         alert("Error: letters only.")
        }
    }

    while(!checkAge){
        const ageInput = prompt("What is your age?: ")
        if(ageInput === null){
            alert("closed app");
            return;
        }
        age = Number(ageInput);


        if (!isNaN(age)&& age > 0){
            ValidAge = true
        }else {
            alert("Error: numbers only");
        }
    }


    if(age>=18){
        alert(`${name}, adult`);
    }else {
        alert (`${name}, child`);
    }
}




    






