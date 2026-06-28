# React JS Interview Questions & Answers

---

## Progress Checklist

| # | Question | Status |
|---|----------|--------|
| Q1 | What is React JS? What are its key features? | ✅ |
| Q2 | What is the Virtual DOM? How does it work in React? | ❌ |
| Q3 | What is JSX? Why does React use JSX? | ❌ |
| Q4 | What is a Component in React? What types of components exist? | ❌ |
| Q5 | What is the difference between a Class Component and a Functional Component? | ❌ |
| Q6 | What are props? How do you pass props from a parent to a child component? | ❌ |
| Q7 | What is state? What is the difference between state and props? | ❌ |
| Q8 | What are lifecycle methods in a React Class Component? | ❌ |
| Q9 | What does the `render()` method do in React? | ❌ |
| Q10 | Why should you never mutate state directly and always use `setState()`? | ❌ |
| Q11 | What is the `key` prop in React? Why is it important? | ❌ |
| Q12 | What is the difference between a Controlled and Uncontrolled Component? | ❌ |
| Q13 | How does event handling work in React? How does it differ from plain HTML? | ❌ |
| Q14 | What are the different ways to implement conditional rendering in React? | ❌ |
| Q15 | How do you render a list in React? | ❌ |
| Q16 | What are React Hooks? Why were they introduced? | ❌ |
| Q17 | How does the `useState` hook work? Give an example. | ❌ |
| Q18 | What is the `useEffect` hook used for? Explain the dependency array. | ❌ |
| Q19 | When does `useEffect` re-run? How do you make it run only once? | ❌ |
| Q20 | What is a cleanup function in `useEffect`? When should you use it? | ❌ |
| Q21 | What is the `useContext` hook used for? | ❌ |
| Q22 | What is the `useRef` hook used for? Give a real-world example. | ❌ |
| Q23 | What is the `useMemo` hook used for? When should you use it? | ❌ |
| Q24 | What is the `useCallback` hook used for? How does it differ from `useMemo`? | ❌ |
| Q25 | What is the `useReducer` hook used for? Compare it with `useState`. | ❌ |
| Q26 | What is a Custom Hook? How do you create and use one? | ❌ |
| Q27 | What are the Rules of Hooks? Why must they be followed? | ❌ |
| Q28 | What is the difference between `useLayoutEffect` and `useEffect`? | ❌ |
| Q29 | What is the `useImperativeHandle` hook used for? | ❌ |
| Q30 | What is the `useId` hook used for? When should you use it? | ❌ |
| Q31 | What is a Higher-Order Component (HOC)? Give an example. | ❌ |
| Q32 | What is the Render Props pattern? Give an example. | ❌ |
| Q33 | What is the Compound Component pattern? | ❌ |
| Q34 | Controlled vs Uncontrolled Components — when should you use each? | ❌ |
| Q35 | What is "Lifting State Up"? When should you apply it? | ❌ |
| Q36 | What is component composition? Why is it preferred over inheritance? | ❌ |
| Q37 | What is the difference between a Presentational and Container Component? | ❌ |
| Q38 | What is the `children` prop in React? How is it used? | ❌ |
| Q39 | What is Forwarding Refs (`React.forwardRef`)? When do you need it? | ❌ |
| Q40 | What is `React.memo`? When should you use it? | ❌ |
| Q41 | What is the React Context API? When should you use it? | ❌ |
| Q42 | Can the Context API fully replace Redux? Why or why not? | ❌ |
| Q43 | What is Redux? Explain its core concepts: Store, Action, Reducer, Dispatch. | ❌ |
| Q44 | What is Redux Thunk? What problem does it solve? | ❌ |
| Q45 | How does Redux Saga differ from Redux Thunk? | ❌ |
| Q46 | What is Redux Toolkit? What are its advantages over plain Redux? | ❌ |
| Q47 | What is Zustand? What are its advantages over Redux? | ❌ |
| Q48 | What is Recoil? What are Atoms and Selectors in Recoil? | ❌ |
| Q49 | When should you use local state vs. global state? | ❌ |
| Q50 | What is immutability in state management? Why is it important? | ❌ |
| Q51 | When does React re-render? How do you prevent unnecessary re-renders? | ❌ |
| Q52 | How does `React.memo` work? Compare it with `PureComponent`. | ❌ |
| Q53 | How do `useMemo` and `useCallback` help optimize performance? | ❌ |
| Q54 | What is code splitting in React? How do you implement it? | ❌ |
| Q55 | What is lazy loading? How do `React.lazy` and `Suspense` work together? | ❌ |
| Q56 | What is virtualization (windowing)? When should you apply it in React? | ❌ |
| Q57 | What is Reconciliation in React? How does the Diffing algorithm work? | ❌ |
| Q58 | What is batching in React? What improvements did React 18 introduce? | ❌ |
| Q59 | What is the React Profiler API used for? | ❌ |
| Q60 | How does bundle size affect performance? Strategies to reduce it? | ❌ |
| Q61 | What is React Router? What are the core components of React Router v6? | ❌ |
| Q62 | What is the difference between `BrowserRouter` and `HashRouter`? | ❌ |
| Q63 | What is dynamic routing in React Router? How do you access route params? | ❌ |
| Q64 | How do nested routes work in React Router v6? | ❌ |
| Q65 | What is the `useNavigate` hook used for? How does it differ from `useHistory`? | ❌ |
| Q66 | What are Protected Routes (Private Routes)? How do you implement them? | ❌ |
| Q67 | What are `useParams`, `useLocation`, and `useSearchParams` used for? | ❌ |
| Q68 | How do you implement lazy-loaded routes in React Router? | ❌ |
| Q69 | What is the `Outlet` component in React Router v6? | ❌ |
| Q70 | How does `NavLink` differ from `Link` in React Router? | ❌ |
| Q71 | How do you handle forms in React? Compare controlled and uncontrolled. | ❌ |
| Q72 | What is React Hook Form? What are its advantages? | ❌ |
| Q73 | What is Formik? When should you use it? | ❌ |
| Q74 | What is Yup? How do you integrate it with React Hook Form? | ❌ |
| Q75 | How do you handle file uploads in React? | ❌ |
| Q76 | What types of tests exist in a React application? (Unit, Integration, E2E) | ❌ |
| Q77 | What is React Testing Library? What is its design philosophy? | ❌ |
| Q78 | How do Jest and React Testing Library work together? | ❌ |
| Q79 | What are `render`, `screen`, `fireEvent`, and `userEvent`? | ❌ |
| Q80 | What is snapshot testing in React? What are its pros and cons? | ❌ |
| Q81 | What is mocking in React tests? How do you mock API calls? | ❌ |
| Q82 | What is Cypress used for in React testing? | ❌ |
| Q83 | What is test coverage? What percentage should you aim for? | ❌ |
| Q84 | How do you test Custom Hooks in React? | ❌ |
| Q85 | How do you test components that use Context? | ❌ |
| Q86 | What is SSR? What are its benefits over Client-Side Rendering? | ❌ |
| Q87 | What is Static Site Generation (SSG)? How does it differ from SSR? | ❌ |
| Q88 | What is Next.js? Why is it built on top of React? | ❌ |
| Q89 | What are React Server Components? How do they differ from Client Components? | ❌ |
| Q90 | What are Error Boundaries? How do you implement them? | ❌ |
| Q91 | What is Strict Mode in React? What does it do in development? | ❌ |
| Q92 | What are Portals in React? When do you need to use them? | ❌ |
| Q93 | What is `React.Fragment` used for? | ❌ |
| Q94 | What is Suspense in React? In what scenarios is it used? | ❌ |
| Q95 | What are Concurrent Mode / Concurrent Features in React 18? | ❌ |
| Q96 | How do you use TypeScript with React? How do you type props? | ❌ |
| Q97 | What is the `React.FC` type? Should you use it? | ❌ |
| Q98 | What are generic components in React with TypeScript? | ❌ |
| Q99 | What are the different styling approaches in React? | ❌ |
| Q100 | What is Micro-frontend? How can React be applied in a micro-frontend? | ❌ |
| Q101 | What is an ES Module (ESM)? How does it differ from CommonJS? | ✅ |
| Q102 | What is a `default export`? How do you export and import it? | ✅ |
| Q103 | What is a `named export`? How do you export and import it? | ✅ |
| Q104 | What is the difference between `default export` and `named export`? | ✅ |
| Q105 | Can a module have both a `default export` and `named export`? | ❌ |
| Q106 | What is `export * from '...'`? When is it used? | ❌ |
| Q107 | What is `export { x as default }` and how does it differ from `export default x`? | ❌ |
| Q108 | What is a barrel file (index file) pattern? What are its pros and cons? | ❌ |
| Q109 | What is dynamic `import()`? How does it differ from static `import`? | ❌ |
| Q110 | How does tree-shaking work and why do named exports support it better? | ❌ |

---

## 1. Basic Concepts

---

**Q1. What is React JS? What are its key features?**

> **Answer:**
> React is an open-source JavaScript library developed by Meta to build UI for web applications.
> Key features:
>
> **Component-based**: The layout is separated into many independent components, each with its own state and UI.
> **Virtual DOM**: Uses a virtual DOM to optimize performance. React compares the current virtual DOM with the old one and only updates the changed parts in the real DOM.
> **Declarative**: Declares how the layout looks for every state of the data. React will update the UI when the data changes.
> **Unidirectional Data Flow**: The data in React flows one way from parent component to child component via `props`. This makes it easy to manage and debug.
> **JSX (JavaScript XML)**: React uses JSX syntax, which allows writing HTML-like markup directly inside JavaScript.
> &nbsp;

---

**Q2. What is the Virtual DOM? How does it work in React?**

> **Answer:**
>
> &nbsp;

---

**Q3. What is JSX? Why does React use JSX?**

> **Answer:**
>
> &nbsp;

---

**Q4. What is a Component in React? What types of components exist?**

> **Answer:**
>
> &nbsp;

---

**Q5. What is the difference between a Class Component and a Functional Component?**

> **Answer:**
>
> &nbsp;

---

**Q6. What are props? How do you pass props from a parent component to a child component?**

> **Answer:**
>
> &nbsp;

---

**Q7. What is state? What is the difference between state and props?**

> **Answer:**
>
> &nbsp;

---

**Q8. What are lifecycle methods in a React Class Component? Name the main phases.**

> **Answer:**
>
> &nbsp;

---

**Q9. What does the `render()` method do in React?**

> **Answer:**
>
> &nbsp;

---

**Q10. Why should you never mutate state directly and always use `setState()` instead?**

> **Answer:**
>
> &nbsp;

---

**Q11. What is the `key` prop in React? Why is it important?**

> **Answer:**
>
> &nbsp;

---

**Q12. What is the difference between a Controlled Component and an Uncontrolled Component?**

> **Answer:**
>
> &nbsp;

---

**Q13. How does event handling work in React? How does it differ from plain HTML?**

> **Answer:**
>
> &nbsp;

---

**Q14. What are the different ways to implement conditional rendering in React?**

> **Answer:**
>
> &nbsp;

---

**Q15. How do you render a list in React?**

> **Answer:**
>
> &nbsp;

---

## 2. Hooks

---

**Q16. What are React Hooks? Why were they introduced?**

> **Answer:**
>
> &nbsp;

---

**Q17. How does the `useState` hook work? Give an example.**

> **Answer:**
>
> &nbsp;

---

**Q18. What is the `useEffect` hook used for? Explain the dependency array.**

> **Answer:**
>
> &nbsp;

---

**Q19. When does `useEffect` re-run? How do you make it run only once?**

> **Answer:**
>
> &nbsp;

---

**Q20. What is a cleanup function in `useEffect`? When should you use it?**

> **Answer:**
>
> &nbsp;

---

**Q21. What is the `useContext` hook used for?**

> **Answer:**
>
> &nbsp;

---

**Q22. What is the `useRef` hook used for? Give a real-world example.**

> **Answer:**
>
> &nbsp;

---

**Q23. What is the `useMemo` hook used for? When should you use it?**

> **Answer:**
>
> &nbsp;

---

**Q24. What is the `useCallback` hook used for? How does it differ from `useMemo`?**

> **Answer:**
>
> &nbsp;

---

**Q25. What is the `useReducer` hook used for? Compare it with `useState`.**

> **Answer:**
>
> &nbsp;

---

**Q26. What is a Custom Hook? How do you create and use one?**

> **Answer:**
>
> &nbsp;

---

**Q27. What are the Rules of Hooks? Why must they be followed?**

> **Answer:**
>
> &nbsp;

---

**Q28. What is the difference between `useLayoutEffect` and `useEffect`?**

> **Answer:**
>
> &nbsp;

---

**Q29. What is the `useImperativeHandle` hook used for?**

> **Answer:**
>
> &nbsp;

---

**Q30. What is the `useId` hook used for? When should you use it?**

> **Answer:**
>
> &nbsp;

---

## 3. Component Patterns & Design

---

**Q31. What is a Higher-Order Component (HOC)? Give an example.**

> **Answer:**
>
> &nbsp;

---

**Q32. What is the Render Props pattern? Give an example.**

> **Answer:**
>
> &nbsp;

---

**Q33. What is the Compound Component pattern?**

> **Answer:**
>
> &nbsp;

---

**Q34. Controlled vs Uncontrolled Components — when should you use each?**

> **Answer:**
>
> &nbsp;

---

**Q35. What is "Lifting State Up"? When should you apply it?**

> **Answer:**
>
> &nbsp;

---

**Q36. What is component composition? Why is it preferred over inheritance in React?**

> **Answer:**
>
> &nbsp;

---

**Q37. What is the difference between a Presentational Component and a Container Component?**

> **Answer:**
>
> &nbsp;

---

**Q38. What is the `children` prop in React? How is it used?**

> **Answer:**
>
> &nbsp;

---

**Q39. What is Forwarding Refs (`React.forwardRef`)? When do you need it?**

> **Answer:**
>
> &nbsp;

---

**Q40. What is `React.memo`? When should you use it?**

> **Answer:**
>
> &nbsp;

---

## 4. Context & State Management

---

**Q41. What is the React Context API? When should you use it?**

> **Answer:**
>
> &nbsp;

---

**Q42. Can the Context API fully replace Redux? Why or why not?**

> **Answer:**
>
> &nbsp;

---

**Q43. What is Redux? Explain its core concepts: Store, Action, Reducer, and Dispatch.**

> **Answer:**
>
> &nbsp;

---

**Q44. What is Redux Thunk? What problem does it solve?**

> **Answer:**
>
> &nbsp;

---

**Q45. How does Redux Saga differ from Redux Thunk?**

> **Answer:**
>
> &nbsp;

---

**Q46. What is Redux Toolkit? What are its advantages over plain Redux?**

> **Answer:**
>
> &nbsp;

---

**Q47. What is Zustand? What are its advantages over Redux?**

> **Answer:**
>
> &nbsp;

---

**Q48. What is Recoil? What are Atoms and Selectors in Recoil?**

> **Answer:**
>
> &nbsp;

---

**Q49. When should you use local state vs. global state?**

> **Answer:**
>
> &nbsp;

---

**Q50. What is immutability in state management? Why is it important?**

> **Answer:**
>
> &nbsp;

---

## 5. Performance Optimization

---

**Q51. When does React re-render? How do you prevent unnecessary re-renders?**

> **Answer:**
>
> &nbsp;

---

**Q52. How does `React.memo` work? Compare it with `PureComponent`.**

> **Answer:**
>
> &nbsp;

---

**Q53. How do `useMemo` and `useCallback` help optimize performance?**

> **Answer:**
>
> &nbsp;

---

**Q54. What is code splitting in React? How do you implement it?**

> **Answer:**
>
> &nbsp;

---

**Q55. What is lazy loading in React? How do `React.lazy` and `Suspense` work together?**

> **Answer:**
>
> &nbsp;

---

**Q56. What is virtualization (windowing)? When should you apply it in React?**

> **Answer:**
>
> &nbsp;

---

**Q57. What is Reconciliation in React? How does the Diffing algorithm work?**

> **Answer:**
>
> &nbsp;

---

**Q58. What is batching in React? What improvements did React 18 introduce for batching?**

> **Answer:**
>
> &nbsp;

---

**Q59. What is the React Profiler API used for?**

> **Answer:**
>
> &nbsp;

---

**Q60. How does bundle size affect performance? What are strategies to reduce bundle size in a React app?**

> **Answer:**
>
> &nbsp;

---

## 6. Routing

---

**Q61. What is React Router? What are the core components of React Router v6?**

> **Answer:**
>
> &nbsp;

---

**Q62. What is the difference between `BrowserRouter` and `HashRouter`?**

> **Answer:**
>
> &nbsp;

---

**Q63. What is dynamic routing in React Router? How do you access route params?**

> **Answer:**
>
> &nbsp;

---

**Q64. How do nested routes work in React Router v6?**

> **Answer:**
>
> &nbsp;

---

**Q65. What is the `useNavigate` hook used for? How does it differ from `useHistory` in v5?**

> **Answer:**
>
> &nbsp;

---

**Q66. What are Protected Routes (Private Routes)? How do you implement them?**

> **Answer:**
>
> &nbsp;

---

**Q67. What are `useParams`, `useLocation`, and `useSearchParams` used for?**

> **Answer:**
>
> &nbsp;

---

**Q68. How do you implement lazy-loaded routes in React Router?**

> **Answer:**
>
> &nbsp;

---

**Q69. What is the `Outlet` component in React Router v6?**

> **Answer:**
>
> &nbsp;

---

**Q70. How does `NavLink` differ from `Link` in React Router?**

> **Answer:**
>
> &nbsp;

---

## 7. Forms & Validation

---

**Q71. How do you handle forms in React? Compare the controlled and uncontrolled approaches.**

> **Answer:**
>
> &nbsp;

---

**Q72. What is React Hook Form? What are its advantages over traditional form handling?**

> **Answer:**
>
> &nbsp;

---

**Q73. What is Formik? When should you use it?**

> **Answer:**
>
> &nbsp;

---

**Q74. What is the Yup validation library used for? How do you integrate it with React Hook Form?**

> **Answer:**
>
> &nbsp;

---

**Q75. How do you handle file uploads in React?**

> **Answer:**
>
> &nbsp;

---

## 8. Testing

---

**Q76. What types of tests exist in a React application? (Unit, Integration, E2E)**

> **Answer:**
>
> &nbsp;

---

**Q77. What is React Testing Library? What is its design philosophy?**

> **Answer:**
>
> &nbsp;

---

**Q78. How do Jest and React Testing Library work together?**

> **Answer:**
>
> &nbsp;

---

**Q79. What are `render`, `screen`, `fireEvent`, and `userEvent` in React Testing Library?**

> **Answer:**
>
> &nbsp;

---

**Q80. What is snapshot testing in React? What are its pros and cons?**

> **Answer:**
>
> &nbsp;

---

**Q81. What is mocking in React tests? How do you mock API calls?**

> **Answer:**
>
> &nbsp;

---

**Q82. What is Cypress used for in React testing?**

> **Answer:**
>
> &nbsp;

---

**Q83. What is test coverage? What percentage of coverage should you aim for?**

> **Answer:**
>
> &nbsp;

---

**Q84. How do you test Custom Hooks in React?**

> **Answer:**
>
> &nbsp;

---

**Q85. How do you test components that use Context?**

> **Answer:**
>
> &nbsp;

---

## 9. Advanced Topics

---

**Q86. What is Server-Side Rendering (SSR)? What are its benefits over Client-Side Rendering (CSR)?**

> **Answer:**
>
> &nbsp;

---

**Q87. What is Static Site Generation (SSG)? How does it differ from SSR?**

> **Answer:**
>
> &nbsp;

---

**Q88. What is Next.js? Why is it built on top of React?**

> **Answer:**
>
> &nbsp;

---

**Q89. What are React Server Components? How do they differ from Client Components?**

> **Answer:**
>
> &nbsp;

---

**Q90. What are Error Boundaries? How do you implement them in React?**

> **Answer:**
>
> &nbsp;

---

**Q91. What is Strict Mode in React? What does it do in development?**

> **Answer:**
>
> &nbsp;

---

**Q92. What are Portals in React? When do you need to use them?**

> **Answer:**
>
> &nbsp;

---

**Q93. What is `React.Fragment` used for?**

> **Answer:**
>
> &nbsp;

---

**Q94. What is Suspense in React? In what scenarios is it used?**

> **Answer:**
>
> &nbsp;

---

**Q95. What are Concurrent Mode / Concurrent Features in React 18?**

> **Answer:**
>
> &nbsp;

---

## 10. TypeScript & Ecosystem

---

**Q96. How do you use TypeScript with React? How do you type props?**

> **Answer:**
>
> &nbsp;

---

**Q97. What is the `React.FC` type? Should you use it? Why or why not?**

> **Answer:**
>
> &nbsp;

---

**Q98. What are generic components in React with TypeScript?**

> **Answer:**
>
> &nbsp;

---

**Q99. What are the different styling approaches in React? (CSS Modules, Styled Components, Tailwind CSS, etc.)**

> **Answer:**
>
> &nbsp;

---

**Q100. What is Micro-frontend? How can React be applied in a micro-frontend architecture?**

> **Answer:**
>
> &nbsp;

---

## 11. ES Modules

---

**Q101. What is an ES Module (ESM)? How does it differ from CommonJS (`require`/`module.exports`)?**

> **Answer:**
>
> **ES Module (ESM)** là hệ thống module chính thức của JavaScript, được giới thiệu từ ES6 (2015). Trình duyệt hiện đại hỗ trợ native.
>
> **CommonJS (CJS)** là hệ thống module truyền thống của Node.js, dùng `require()` và `module.exports`.
>
> | Feature | ESM | CommonJS |
> |---------|-----|----------|
> | Syntax | `import` / `export` | `require()` / `module.exports` |
> | Loading | Static (phân tích lúc compile) | Dynamic (thực thi lúc runtime) |
> | Strict mode | Luôn bật | Phải khai báo thủ công |
> | Top-level `await` | Hỗ trợ | Không hỗ trợ |
> | Tree-shaking | Có (bundler tối ưu được) | Không |
> | Browser native | Có | Không (cần bundler) |
>
> ```js
> // ESM
> export const greet = () => 'Hello';
> import { greet } from './module.js';
>
> // CommonJS
> module.exports = { greet: () => 'Hello' };
> const { greet } = require('./module');
> ```
> &nbsp;

---

**Q102. What is a `default export`? How do you export and import it?**

> **Answer:**
>
> `default export` là export chính của một module. Mỗi module chỉ được có **đúng 1** default export.
>
> **Export:**
> ```js
> // Cách 1: export trực tiếp khi khai báo
> export default function greet() { return 'Hello'; }
>
> // Cách 2: khai báo trước, export sau
> const greet = () => 'Hello';
> export default greet;
>
> // Cách 3: export một object (gom nhiều thứ vào 1 default)
> export default { greet, PI: 3.14 };
> ```
>
> **Import:**
> ```js
> // Có thể dùng bất kỳ tên nào, không cần curly braces {}
> import greet from './module';
> import sayHello from './module';   // tên khác cũng hợp lệ
> import myModule from './module';   // rồi dùng myModule.greet
> ```
> &nbsp;

---

**Q103. What is a `named export`? How do you export and import it?**

> **Answer:**
>
> `named export` cho phép export **nhiều items** (functions, variables, classes) từ cùng một file. Khi import phải dùng đúng tên đã export (hoặc dùng `as` để đặt alias).
>
> **Export:**
> ```js
> // Cách 1: khai báo trước, export sau
> const myVariable = 10;
> function myFunction() { console.log('Hello'); }
> export { myVariable, myFunction };
>
> // Cách 2: export trực tiếp khi khai báo
> export const myVariable2 = 20;
> export function myFunction2() { console.log('Hello 2'); }
> ```
>
> **Import:**
> ```js
> // Dùng đúng tên trong curly braces {}
> import { myVariable, myFunction } from './module';
>
> // Dùng alias với as (tùy chọn)
> import { myFunction as fn } from './module';
>
> // Import tất cả vào một namespace object
> import * as utils from './module';
> console.log(utils.myVariable); // 10
> ```
> &nbsp;

---

**Q104. What is the difference between `default export` and `named export`? When should you use each?**

> **Answer:**
>
> | Feature | `default export` | `named export` |
> |---------|-----------------|----------------|
> | Số lượng mỗi module | Chỉ 1 | Nhiều |
> | Import name | Tự đặt tên bất kỳ (không cần `{}`) | Phải khớp tên đã export (dùng `{}`) |
> | Đổi tên khi import | Không cần `as` | Dùng `as` nếu muốn alias (tùy chọn) |
> | `import *` | Không bao gồm | Bao gồm trong namespace object |
> | Tree-shaking | Kém hơn | Tốt hơn |
>
> **⚠️ Lưu ý sửa lại:** `named export` **không bắt buộc** dùng `as`. Chỉ cần `as` khi muốn đặt alias khác. `import { myFunction } from './module'` hoàn toàn hợp lệ mà không cần `as`.
>
> **Khi nào dùng:**
> - **Default export**: Khi module có một export chính duy nhất — ví dụ: mỗi file React component thường dùng 1 default export
> - **Named export**: Khi module export nhiều thứ — ví dụ: utility functions, constants, helpers
> &nbsp;

---

**Q105. Can a module have both a `default export` and `named export` at the same time?**

> **Answer:**
>
> &nbsp;

---

**Q106. What is `export * from '...'`? When is it used?**

> **Answer:**
>
> &nbsp;

---

**Q107. What is `export { x as default }` and how does it differ from `export default x`?**

> **Answer:**
>
> &nbsp;

---

**Q108. What is a barrel file (index file) pattern in ES Modules? What are its pros and cons?**

> **Answer:**
>
> &nbsp;

---

**Q109. What is dynamic `import()`? How does it differ from static `import`?**

> **Answer:**
>
> &nbsp;

---

**Q110. How does tree-shaking work and why do named exports support it better than default exports?**

> **Answer:**
>
> &nbsp;

---
