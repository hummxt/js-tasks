// 1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
// Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın

function Car() {
    this.marka = 'Pagani';
    this.model = 'Zonda R';
    this.year = 2000;
}

let myCar = new Car();  
console.log(myCar);