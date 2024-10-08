
let eded = prompt("Ədədi daxil edin:");

let cem = 0;

for (let i = 100; i <= 999; i++) {
    if (i % eded === 0) {
        cem = cem + i;
    }
}

console.log("Netice: " + cem);
