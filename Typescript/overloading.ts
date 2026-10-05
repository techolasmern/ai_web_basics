function add(a: number, b: number): number;
function add(a: string, b: number): string;

function add(a: any, b: any): any {
    return a + b;
}

const res = add(10, 30);
const res2 = add("hello", 5);

console.log(res, res2);

// ------------------------------------------------------------------------------------

