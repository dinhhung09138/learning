## Knowledge Base ReactJs

---

## Câu 1. ReactJS là gì?

**ReactJS** (hay còn gọi là React) là một **thư viện JavaScript mã nguồn mở** được phát triển bởi **Meta (Facebook)** vào năm 2013, dùng để xây dựng **giao diện người dùng (UI)** cho các ứng dụng web.

### Đặc điểm chính

- **Component-based (Dựa trên thành phần):** Giao diện được chia thành các component độc lập, có thể tái sử dụng. Mỗi component quản lý trạng thái (state) và giao diện riêng của nó.

- **Virtual DOM:** React sử dụng một DOM ảo (Virtual DOM) để tối ưu hiệu suất. Khi dữ liệu thay đổi, React so sánh Virtual DOM mới với cũ và chỉ cập nhật phần thực sự thay đổi trên DOM thật, giúp ứng dụng chạy nhanh hơn.

- **Declarative (Khai báo):** Lập trình viên chỉ cần mô tả giao diện trông như thế nào ứng với từng trạng thái dữ liệu, React sẽ tự động cập nhật UI khi dữ liệu thay đổi.

- **Unidirectional Data Flow (Luồng dữ liệu một chiều):** Dữ liệu trong React chảy theo một chiều từ component cha xuống component con thông qua `props`, giúp dễ dàng theo dõi và debug.

- **JSX (JavaScript XML):** React sử dụng cú pháp JSX cho phép viết HTML-like trực tiếp trong JavaScript, giúp code trực quan và dễ đọc hơn.

### React là thư viện, không phải framework

React chỉ tập trung vào tầng **View** trong mô hình MVC. Để xây dựng ứng dụng đầy đủ, thường kết hợp thêm các thư viện khác như:
- **React Router** – điều hướng trang
- **Redux / Zustand / Context API** – quản lý state toàn cục
- **Axios / Fetch** – gọi API

---

## React vs React Native

### Overview

| | **React** | **React Native** |
|---|---|---|
| **Created by** | Meta (Facebook), 2013 | Meta (Facebook), 2015 |
| **Purpose** | Build web UIs | Build native mobile apps (iOS & Android) |
| **Output** | Runs in the browser (HTML/CSS/JS) | Runs on mobile devices as a native app |
| **Language** | JavaScript / TypeScript + JSX | JavaScript / TypeScript + JSX |

---

### Key Differences

#### 1. Platform Target

- **React** renders to the **browser DOM** — output is standard HTML elements (`<div>`, `<span>`, `<p>`, ...).
- **React Native** renders to **native mobile components** — output is platform-specific UI elements (`<View>`, `<Text>`, `<Image>`, ...), NOT HTML.

#### 2. Styling

- **React** uses standard **CSS** (plain CSS, CSS Modules, Styled Components, Tailwind, etc.).
- **React Native** uses a **JavaScript-based StyleSheet API** that mimics a subset of CSS. No CSS files — styles are written as JS objects.

```js
// React Native styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
```

#### 3. Core Components

| React (HTML) | React Native |
|---|---|
| `<div>` | `<View>` |
| `<p>`, `<span>` | `<Text>` |
| `<img>` | `<Image>` |
| `<input>` | `<TextInput>` |
| `<button>` | `<TouchableOpacity>` / `<Pressable>` |
| `<ul>` / `<li>` | `<FlatList>` / `<SectionList>` |
| `<a>` | `<Pressable>` + navigation |

#### 4. Navigation

- **React** uses **React Router** for navigation between pages.
- **React Native** uses **React Navigation** (most popular) or **Expo Router** for screen navigation.

#### 5. APIs & Native Features

- **React** accesses browser APIs: `localStorage`, `fetch`, `window`, `document`, etc.
- **React Native** accesses device APIs via the bridge or JSI: Camera, GPS, Bluetooth, Push Notifications, Accelerometer, etc. — either through built-in APIs or libraries like **Expo**.

#### 6. Development & Build

| | **React** | **React Native** |
|---|---|---|
| **Dev server** | Vite / CRA / Next.js | Metro bundler |
| **Run on** | Any browser | iOS Simulator, Android Emulator, physical device |
| **Build output** | Static HTML/JS/CSS files | `.ipa` (iOS), `.apk` / `.aab` (Android) |
| **Hot reload** | Fast Refresh | Fast Refresh |

#### 7. Tooling & Ecosystem

- **React:** Vite, Create React App (deprecated), Next.js, Remix.
- **React Native:** React Native CLI (bare workflow) or **Expo** (managed workflow — recommended for most projects).

---

### What They Share

Despite the differences, React and React Native share the same core concepts:

- **Component-based architecture** — same mental model
- **JSX syntax** — same way of writing UI
- **Hooks** — `useState`, `useEffect`, `useContext`, `useMemo`, etc. work identically
- **State management** — Redux, Zustand, Context API work on both
- **Props & state** — same data flow patterns
- **TypeScript support** — first-class on both

> Code is **not directly portable** (different components and APIs), but skills and patterns transfer almost 1:1.

---

### When to Use Which?

| Use Case | Choose |
|---|---|
| Website / web app | **React** |
| iOS & Android mobile app | **React Native** |
| Web + Mobile from one codebase | **React Native Web** or **Expo** |
| Desktop app | **Electron** (React) or **React Native Windows/macOS** |
| SSR / SEO-focused web app | **Next.js** (built on React) |
