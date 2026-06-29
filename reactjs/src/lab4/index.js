// Khai báo function declaration
function xinChao() {
    console.log("Xin chào các bạn!");
}

function xinChao2(userName = "Người dùng") {
    console.log(`Xin chào ${userName}!`);
}


xinChao(); // Gọi function để thực thi
xinChao2("Alice"); // Gọi function với tham số
xinChao2(); // Gọi function mà không truyền tham số, sử dụng giá trị mặc định
xinChao2("Bob"); // Gọi function với tham số khác

// Khai báo function expression 
let tinhTong = function (a, b) {
    return a + b;
}
console.log(tinhTong(5, 10)); // Gọi function expression và in kết quả

// Khai báo arrow function
let tinhHieu = (a, b) => {
    return a - b;
}

console.log(tinhHieu(10, 5)); // Gọi arrow function và in kết quả

// Khai báo arrow function với cú pháp rút gọn
let tinhTich = (a, b) => a * b;
console.log(tinhTich(5, 10)); // Gọi arrow function rút gọn và in kết quả

// Khai báo arrow function trả về một đối tượng
let person = (name, age) => {
    return { name: name, age: age };
};
let product = (name, price) => ({ name: name, price: price }); // Arrow function trả về đối tượng với cú pháp rút gọn
console.log(person("Alice", 25)); // Gọi arrow function trả về đối tượng và in kết quả
console.log(product("Laptop", 1000)); // Gọi arrow function trả về đối tượng và in kết quả