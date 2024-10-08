const age = prompt("Yasinizi daxil edin :")
const name = prompt("Adinizi daxil edin :")
const gender = prompt("Cinsinizi daxil edin (K/Q) :")

switch (gender) {
    case "K" && age >= 18:
         alert(`Selam cenab ${name}.`);
        break;
    case "Q" && age >= 18:
            alert(`Selam ${name} xanim.`);
        break;
    default:
        alert("Yanlis daxil etdiniz.")
}