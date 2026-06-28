// Cách 1. Khai báo hàm, biến, classs rồi export.

const myVariable = 10;

function myFunction(){
    console.log("Hello World");
}

export { myVariable, myFunction };

// Cách 2 Export trực tiếp khi khai báo.

export const myVariable2 = 20;

export function myFunction2(){
    console.log("Hello World 2");
}
