const kvadrat = prompt("Evin kvadratini daxil edin :");
const qiymet = prompt("Evin qiymetini daxil edin :");

switch (true) {
    case (kvadrat > 2000 && qiymet <= 99999):
        alert("Evi aliram");
        break;
    default:
        alert("Evi almiram. Alverciler narahat elemesin.");
}