let nameOfAssignment = 'Pre-test';
let tasks = 'Not important but recomended for extra credit;.';


console.log('The task is to take the pre-test')

class nonImportant{
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

    const grade1 = new score("Pre-Test", 95)

    grade1.displayProduct();

    const total = grade1.claculateTotal(gradePoints);
    console.log(`Total grade : $${total.tofixed(2)}`)