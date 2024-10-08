const ceki = parseFloat(prompt("Cekinizi daxil edin (kg):"));
const boy = parseFloat(prompt("Boyunuzu daxil edin (metr):"));

const bmi = ceki / (boy * boy);

switch (true) {
    case bmi <= 18.5:
        alert(`Ariqsan qardas. BMI : ${bmi}`);
        break;
    case bmi <= 25:
        alert(`Standart beden olcun var qardas. BMI : ${bmi}`);
        break; 
    case bmi <= 30:
        alert(`Koksen qardas. BMI : ${bmi}`);
        break; 
    default:
        alert("Yanlis daxil etdiniz.")
}