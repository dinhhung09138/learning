// Cách 1. Lấy 1 phần tử cần thiết
//import { myVariable } from './named.js';

// Sử dụng phần tử đã import
//console.log(myVariable); // Output: 10  

// Cách 2: Lấy một vài phần tử cần thiết.
// import { myVariable, myFunction } from './named.js';

// console.log(myVariable); // Output: 10
// myFunction(); // Output: Hello World

// Cách 3: Lấy tất cả các phần tử và đặt tên cho chúng
import * as myModule from './named.js';

console.log(myModule.myVariable); // Output: 10
myModule.myFunction(); // Output: Hello World

// Không thể lấy giá trị default export bằng cách import *  vì default export không có tên.
// Để lấy cần import riêng
import * as defaultModule from './default.js';
console.log(defaultModule.df);
console.log(defaultModule);

import total from './default.js';
console.log(total.total(5, 10)); // Output: 15  