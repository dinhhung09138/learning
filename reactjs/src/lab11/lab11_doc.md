

# Component trong ReactJS

Component là một phần tử cơ bản trong ReactJS, được sử dụng để xây dựng giao diện người dùng (UI) và quản lý trạng thái của ứng dụng.

## Mục đích của Component

- Tái sử dụng mã nguồn, tránh việc lặp lại code và giúp việc bảo trì dễ dàng hơn.
- Tách biệt giữa các component giúp quản lý trạng thái và logic của ứng dụng một cách rõ ràng hơn.
- Giúp tách biệt các thành phần của giao diện người dùng thành các phần tử nhỏ hơn, dễ dàng quản lý và phát triển.

## Các loại Component trong ReactJS

1. **Functional Component**: Là một hàm JavaScript trả về một phần tử React. Thường được sử dụng cho các component đơn giản và không có trạng thái (state).

2. **Class Component**: Là một lớp JavaScript mở rộng từ `React.Component`. Thường được sử dụng cho các component phức tạp và có trạng thái (state).

## Các phương thức trong Component

| Phương thức | Mô tả |
|---|---|
| `render()` | Phương thức bắt buộc trong class component, được sử dụng để hiển thị giao diện người dùng. |
| `componentDidMount()` | Được gọi sau khi component được render lần đầu tiên, thường dùng để gọi API hoặc thiết lập trạng thái ban đầu. |
| `componentDidUpdate()` | Được gọi sau khi component được cập nhật, thường dùng để cập nhật dữ liệu hoặc thay đổi giao diện người dùng. |
| `componentWillUnmount()` | Được gọi trước khi component bị hủy, thường dùng để dọn dẹp tài nguyên hoặc hủy các tác vụ đang chạy. |
| `shouldComponentUpdate()` | Dùng để kiểm tra xem component có cần được cập nhật hay không, giúp tối ưu hiệu suất của ứng dụng. |
| `getDerivedStateFromProps()` | Dùng để cập nhật trạng thái của component dựa trên props mới nhận được. |
| `getSnapshotBeforeUpdate()` | Dùng để lấy thông tin trước khi component được cập nhật, giúp quản lý trạng thái và giao diện người dùng một cách chính xác hơn. |
| `setState()` | Dùng để cập nhật trạng thái của component, giúp giao diện người dùng được cập nhật tự động khi trạng thái thay đổi. |
| `forceUpdate()` | Dùng để buộc component cập nhật lại giao diện người dùng, thường dùng khi muốn cập nhật lại giao diện mà không muốn thay đổi trạng thái. |
