let age = 25;

function getAge() {
    return age;
}

const ag = getAge();
console.log(ag);

function getAnotherAge() {
    console.log(age);
}

age = 26

getAnotherAge()
//

function sampleBlock() {
    var a = 10;
    {
        console.log(a) // undefined
        var a = 20;
        console.log(a); // 20
    }
    console.log(a); // 10
}

sampleBlock();

// closure

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count = count + 5;
        console.log(count);
    }
    return innerFunction;
}
const inner = outerFunction();

inner();
inner();
inner();
inner();
inner();
inner();
inner();
inner();
inner();
inner();
