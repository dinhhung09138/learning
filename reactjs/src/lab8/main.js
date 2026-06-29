
/*
Destructuring
Cho phép bạn trích xuất các giá trị từ mảng hoặc object và gán chúng vào các biến riêng biệt một cách dễ dàng và ngắn gọn hơn.
Với Array: Trích xuất dữ liệu dựa trên vị trí (index) của các phần tử trong mảng.
Với Object: Trích xuất dữ liệu dựa trên tên của các thuộc tính trong object.

*/
const colors = ["Red", "Gren", "Blue"];
// Gán các giá trị của mảng colors vào các biến firstColor, secondColor và thirdColor
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
// Bỏ qua giá trị thứ hai trong mảng colors và gán giá trị thứ nhất và thứ ba vào các biến firstColor và thirdColor
const [firstColor2, , thirdColor2] = colors;
console.log(firstColor2);
console.log(thirdColor2);

// Destructoring với rest operator
// Gán giá trị đầu tiên của mảng colors vào biến firstColor3 và các giá trị còn lại vào mảng restColors
const [firstColor3, ...restColors] = colors;
console.log(firstColor3);
console.log(restColors);

// Destructuring với object
const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
    }
};
// Gán các giá trị của object person vào các biến name, age và city
const { name, age, address: { city } } = person;
console.log(name);
console.log(age);
console.log(city);
// Gán giá trị của thuộc tính name của object person vào biến personName và giá trị của thuộc tính age vào biến personAge
console.log(person.name);
// Sử dụng alias để đổi tên biến khi destructuring
const { name: personName, age: personAge } = person;
console.log(personName);
console.log(personAge);

// Destructuring với function
function getPerson({ name, age, address: { city } }) {
    console.log(name);
    console.log(age);
    console.log(city);
}

getPerson(person);