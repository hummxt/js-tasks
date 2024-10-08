// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.


let eded = prompt("Ikireqemli eded daxil edin:")

if (eded >= 10 && eded < 100) {
  while (eded < 100) {
    eded += 7;
  }
  console.log(eded);
} else {
  alert("Duzgun eded daxil edin");
}