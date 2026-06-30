
/*
Spread operator
Tác dụng: Cho phép bạn mở rộng một mảng hoặc object thành các phần tử riêng lẻ.
Với Array: Mở rộng các phần tử của mảng thành các phần tử riêng lẻ.
Với Object: Mở rộng các thuộc tính của object thành các thuộc tính riêng lẻ.

Thường sử dụng trong các trường hợp:
1. Khi muốn tạo một mảng mới từ một mảng hiện có.
2. Khi muốn kết hợp nhiều mảng thành một mảng mới.
3. Khi muốn sao chép một object hoặc mảng mà không làm thay đổi thuộc tính gốc.
4. Khi muốn truyền các phần tử của mảng hoặc object làm đối số cho một hàm.
5. Khi muốn thêm các phần tử mới vào một mảng hoặc object mà không làm thay đổi thuộc tính gốc.
6. Khi muốn tạo một mảng mới từ một mảng hiện có và thêm các phần tử mới vào mảng đó.
7. Khi muốn tạo một object mới từ một object hiện có và thêm các thuộc tính mới vào object đó.
*/
// Mảng hiện tại.
let colors = ["Red", "Gren", "Blue"];
// Cập nhật mảng hiện tại bằng cách sử dụng spread operator.
colors = [...colors, "Yellow"];
console.log(colors); // ["Red", "Gren", "Blue", "Yellow"]
// Thêm một phần tử mới vào mảng hiện tại.
const newColors = [...colors, "Yellow"];
console.log(newColors); // ["Red", "Gren", "Blue", "Yellow"]

// Mảng màu sắc khác
const moreColors = ["Purple", "Orange"];
// Kết hợp hai mảng thành một mảng mới bằng cách sử dụng spread operator.
const combinedColors = [...colors, ...moreColors];
console.log(combinedColors); // ["Red", "Gren", "Blue", "Yellow", "Purple", "Orange"]

// Object hiện tại.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
// Cập nhật object hiện tại bằng cách sử dụng spread operator.
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // { name: "John", age: 31, city: "New York" }

// Thêm một thuộc tính mới vào object hiện tại.
const newPerson = { ...person, country: "USA" };
console.log(newPerson); // { name: "John", age: 30, city: "New York", country: "USA" }

// Kết hợp hai object thành một object mới bằng cách sử dụng spread operator.
const additionalInfo = {
    occupation: "Engineer",
    hobby: "Reading"
};
const combinedPerson = { ...person, ...additionalInfo };
console.log(combinedPerson); // { name: "John", age: 30, city: "New York", occupation: "Engineer", hobby: "Reading" }

/*
JSX: 
- Là từ viết tắt của JavsScript Syntax Extension
- Là một cú pháp mở rộng của JavaScript
- Cho phép bạn viết các thành phần React bằng cú pháp giống như HTML.
- JSX được biên dịch thành các lệnh JavaScript thông thường, vì vậy bạn có thể sử dụng JSX trong các ứng dụng React mà không cần phải học một ngôn ngữ mới.
- JSX có thể được sử dụng để tạo các thành phần React, định nghĩa các thuộc tính và sự kiện, và hiển thị dữ liệu từ state hoặc props.
- Trình duyệt không thể hiểu JSX trực tiếp, vì vậy bạn cần sử dụng một công cụ như Babel, hoặc Vite để biên dịch JSX thành JavaScript trước khi chạy ứng dụng React của bạn.
- Để chạy được Vite, bạn cần cài đặt Node.js và npm (Node Package Manager) trên máy tính của mình.

Fragment:
- Là một thành phần đặc biệt trong React, cho phép nhóm các phần tử con mà không cần thêm một phần tử DOM bổ sung vào cây DOM.
- Fragment được sử dụng khi bạn muốn trả về nhiều phần tử từ một thành phần React mà không cần phải bọc chúng trong một phần tử cha như <div> hoặc <span>.
- Fragment có thể được sử dụng bằng cách sử dụng thẻ <React.Fragment> hoặc cú pháp rút gọn <>.
- Fragment giúp giảm số lượng phần tử DOM được tạo ra, giúp cải thiện hiệu suất của ứng dụng React.

Quy ước Function trong ReactJS
- Tên function phải viết hoa chữ cái đầu tiên.
- Function phải trả về một phần tử React (JSX) hoặc null.
- Function có thể nhận các props làm đối số, nhưng không bắt buộc.
- Function có thể sử dụng các hook của React như useState, useEffect, useContext, v.v.
- Function có thể được sử dụng như một thành phần React trong JSX, bằng cách sử dụng cú pháp <FunctionName />.
- Function có thể được định nghĩa trong cùng một file hoặc trong các file khác và dược import vào file hiện tại.
- Function có thể được sử dụng để tạo các thành phần React có trạng thái (stateful) hoặc không có trạng thái (statelesss).
- Function có thể được sử dụng để tạo các thành phần của React có thể tái sử dụng lại (reusable) trong nhiều phần của ứng dụng React.
*/