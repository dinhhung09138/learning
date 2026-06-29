/*
Array: là một đạng đặc biệt của object.
được sử dụng để lưu trữ nhiều giá trị trong một biến duy nhất.
Các giá trị trong mảng được lưu trữ theo thứ tự và có thể truy cập thông qua chỉ số (index) của chúng.
Chỉ số của mảng bắt đầu từ 0, nghĩa là phần tử đầu tiên có chỉ số là 0, phần tử thứ hai có chỉ số là 1, và cứ tiếp tục như vậy.
*/

// 1. Tạo một mảng, bằng dấu ngoặc vuông [] và các phần tử được phân tách bằng dấu phẩy.
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Output: Apple
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
console.log(typeof fruits); // Output: object

// 2. Mảng lồng nhau, và có thể chứa các kiểu dữ liệu khác nhau, bao gồm cả object và function.
const mixedArray = [
    1, 
    "Hello", 
    { name: "John" }, 
    [1, 2, 3], 
    function() { console.log("I am a function"); }
];
console.log(mixedArray); // Output: [1, "Hello", { name: "John" }, [1, 2, 3], function() { console.log("I am a function"); }]

// 3. Một số phương thức phổ biến của mảng trong JavaScript:
// a. push(): Thêm một hoặc nhiều phần tử vào cuối mảng.
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grapes"]

// b. pop(): Xóa phần tử cuối cùng của mảng và trả về phần tử đó.
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: Grapes
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// c. shift(): Xóa phần tử đầu tiên của mảng và trả về phần tử đó.
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ["Banana", "Orange"]

// d. unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng.
fruits.unshift("Mango");
console.log(fruits); // Output: ["Mango", "Banana", "Orange"]

// e. map(): Tạo một mảng mới bằng cách áp dụng một hàm cho từng phần tử của mảng hiện tại.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// f. filter(): Tạo một mảng mới chứa các phần tử thỏa mãn điều kiện được xác định bởi một hàm.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// g. reduce(): Áp dụng một hàm cho từng phần tử của mảng để giảm nó thành một giá trị duy nhất.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
