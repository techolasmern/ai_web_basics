class Techolas{
    
    constructor(stName) {
        this.studentName = stName;
    }

    display() {
        console.log("display invoked");    
    }

}

// instance / object
const techo = new Techolas("Ajay");

techo.display();

console.log(techo.studentName);


