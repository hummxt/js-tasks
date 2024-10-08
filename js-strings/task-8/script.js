// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin

const firstName = prompt("Adinizi daxil edin: ")
const lastName = prompt("Soyad daxil edin: ")

function fullName() {
    full = firstName + lastName;
    return full;
}

console.log(fullName())