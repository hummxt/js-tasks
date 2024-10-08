// 6.Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin.
// məsələn:
// He!llo! !!FE-32 // netice olmalıdır Hello FE-32!


const string = 'sa!lam';

function salamNecesen() {
    let newString = string.replace("!", '');
    newString = newString.padEnd(6, '!')
    return newString;
}

console.log(salamNecesen());