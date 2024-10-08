// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın


function herfiBoyut(salam) {
    if (salam) {
      return salam.charAt(0).toUpperCase() + salam.slice(1);
    }
  }
  
console.log(herfiBoyut("salam"));





// 8.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın

function hamisiBoyuk(salam) {
  return salam.toUpperCase();
}

console.log(hamisiBoyuk("salam"));



// 9.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın

function hamisiBoyuk(salam) {
  return salam.toLowerCase();
}

console.log(hamisiBoyuk("salam"));