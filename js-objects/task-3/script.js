// Task-03
// Obyektə metodlar əlavə edin.let
// Obyekt verilib. Ona növbəti metodları əlavə edin:
//   setAge — istifadəçi yaşını dəyişdirən metoddur.
//   getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
// qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.


let user = {
    name: 'Hummet',
    age: 45,
    
    setAge(newAge) {
        this.age = newAge;
    },

    getYearsBeforeRetirement() {
        const retirementAge = 65;
        if (this.age >= retirementAge) {
            return "Sen pensiyaya cixmisan";
        } else {
            return retirementAge - this.age;
        }
    }
}

user.setAge(85); 
console.log(user.getYearsBeforeRetirement());