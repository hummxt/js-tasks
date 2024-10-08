const hefteGunu = prompt("1 ve 7 araliginda reqem daxil edin :");
const gunler = ["Salam", "Bazar ertesi", "Cersenbe axsami", "Cersenbe", "Cume axsami", "Cume", "Senbe", "Bazar"];

switch (hefteGunu) {
  case '1':
    console.log(gunler[1]);
    break;
  case '2':
    console.log(gunler[2]);
    break;
  case '3':
    console.log(gunler[3]);
    break;
  case '4':
    console.log(gunler[4]);
    break;
  case '5':
    console.log(gunler[5]);
    break;
  case '6':
    console.log(gunler[6]);
    break;
  case '7':
    console.log(gunler[7]);
    break;
  default:
    console.log("Duzgun reqem daxil edin.");
}