function IniProg() {
  let name = "";
  let age = 0;
  let ValidName = false;
  let ValidAge = false;

  // Name input and validation loop
  while (!ValidName) {
    name = prompt("Please enter your name:");

    if (name === null) {
      alert("❎ Operation cancelled. Goodbye!");
      return;
    }

    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())) {
      name = name.trim();
      ValidName = true;
    } else {
      alert("❌ Invalid name. Please use letters only and do not leave it blank.");
    }
  }

  // Age input and validation loop
  while (!ValidAge) {
    const ageInput = prompt("Please enter your age:");

    if (ageInput === null) {
      alert("❎ Operation cancelled. Goodbye!");
      return;
    }

    age = Number(ageInput);

    if (!isNaN(age) && age > 0) {
      ValidAge = true;
    } else {
      alert("❌ Invalid age. Please enter a number greater than 0.");
    }
  }

  // Final result
  if (age >= 18) {
    alert(`${name}, you are an adult.`);
  } else {
    alert(`${name}, you are a minor.`);
  }
}
