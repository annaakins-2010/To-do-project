let nameOfAssignment= 'History of Anne Frank';
let tasks = 'Write about life and how it was for her';

console.log( 'The assignment is a history assignment about Anne Frank....')

class Important{
        constructor(Name, grade){
            this.Name = Name;
            this.grade = grade;
       } 
        displayProduct(){
             console.log(`classwork: ${this.Name}`);
             console.log(`grade: ${this.grade.tofixed(2)}`);
       }

        claculateTotal(gradePoints){
             return this.grade + (this.grade * gradePoints)
       }
    }
    const gradePoints = 0.50;

    const grade1 = new score("Resaerch about Ann Frank", 95)

    grade1.displayProduct();

    const total = grade1.claculateTotal(gradePoints);
    console.log(`Total grade : $${total.tofixed(2)}`)