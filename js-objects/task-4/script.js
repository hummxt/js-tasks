// Task-04
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//   - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.    

let calculator = {
    yaddas: 0,

    topla: function(hesabla) {
        this.yaddas += hesabla;
        return this.yaddas;
    },

    cixma: function(hesabla) {
        this.yaddas -= hesabla;
        return this.yaddas;
    },

    vurma: function(hesabla) {
        this.yaddas *= hesabla;
        return this.yaddas;
    },

    vurma: function(hesabla) {
        this.yaddas /= hesabla;
        return this.yaddas;
    };
};

console.log(cixma(10))
console.log(topla(40))