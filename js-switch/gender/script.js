const name = prompt("Adinizi daxil edin :")
const gender = prompt("Cinsinizi daxil edin (K/Q) :")

switch (gender) {
    case "K":
         alert(`Selam cenab ${name}.`);
        break;
    case "Q":
            alert(`Selam ${name} xanim.`);
        break;
    default:
        alert("Yanlis daxil etdiniz.")
}