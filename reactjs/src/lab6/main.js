/*
Object là gì?
trong javascript, Object là một kiểu dữ liệu phức tạp dùng để lưu trữ các giá trị dưới dạng key-value.
Bên trong một object có thể chứa các thuộc tính và phương thức.
Thuộc tính là các giá trị được lưu trữ trong object
Phương thức là các hàm được định nghĩa bên trong object và có thể truy cập các thuộc tính của object đó.
Có thể sử dụng từ khóa "this" để truy cập các thuộc tính và phương thức của object hiện tại.

*/
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
        console.log("I am " + this.age + " years old.");
    }
};

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
person.greet(); // Output: Hello, my name is John

/*
Class là gì?
Class là một khuôn mẫu để tạo ra các object trong JavaScript.
Nó cho phép định nghĩa các thuộc tính và phương thức mà các object được tạo ra từ class sẽ có.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
        console.log("I am " + this.age + " years old.");
    }
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // Output: Alice