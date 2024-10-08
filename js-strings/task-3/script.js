// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.


function isValidNumber(number) {
    if (number.length === 11 && number.startsWith("+7")) {
      return true;
    } else {
      return false;
    }
}