// class Techolas{
    
//     constructor(stName) {
//         this.studentName = stName;
//     }

//     display() {
//         console.log("display invoked");    
//     }

// }

// // instance / object
// const techo = new Techolas("Ajay");

// techo.display();

// console.log(techo.studentName);


class Techolas{
    constructor(student) {
        this.student = student;
    }

    display() {
        console.log("display invoked");    
    }
}

class TecholasCalicut extends Techolas{
    constructor(student, age) {
        super(student);
        this.student = student;
        this.age = age;
    }

    display() {
        console.log("Child display", this.student, this.age);
    }

    parentDisplay() {
        super.display();
    }
}

const res = new TecholasCalicut("Ajay", 20);

res.display();
res.parentDisplay();
console.log(res);

const res2 = new TecholasCalicut("Amay", 30);

res2.display();

const res3 = new Todo();

console.log(res3);