# Ứng Dụng Quản Lý Người Dùng (User Management App)

## Giới Thiệu
Ứng dụng này được xây dựng bằng **Express.js + Sequelize + EJS**, hỗ trợ đầy đủ chức năng CRUD (Tạo, Đọc, Cập nhật, Xóa) cho quản lý người dùng. Dưới đây là giao diện chính của ứng dụng:

---

## 1. Trang Chủ (Homepage)
![Trang Chủ](./assets/home.png)  
* **Tiêu đề**: "Quản lý Users của 2Thuancr"  
* **Mô tả**: Hỗ trợ tạo, xem, sửa, xóa người dùng chỉ với 1 click.  
* **Nút hành động**:  
  - `Vào User Management`: Truy cập danh sách người dùng  
  - `Tạo User mới`: Mở form tạo người dùng  
  - `Hướng dẫn nhanh`: Xem hướng dẫn sử dụng  
* **Công nghệ**:  
  - Database: MySQL  
  - ORM: Sequelize  
  - View Engine: EJS  

---

## 2. Danh Sách Người Dùng (Users List)
![Danh Sách Người Dùng](./assets/userslist.png)  
* **Giao diện**: Bảng hiển thị danh sách người dùng với các cột:  
  - ID, First Name, Last Name, Email, Address, Gender  
  - Nút hành động: `Edit` (Sửa) và `Delete` (Xóa)  
* **Nút điều hướng**:  
  - `Back to Home`: Quay về trang chủ  
  - `Create New User`: Tạo người dùng mới  
* **Ví dụ dữ liệu**: Hiển thị 2 người dùng sample (Trung Nguyen Huu, Vi Quoc Thuan).  

---

## 3. Form Tạo Người Dùng Mới (Create User Form)
![Form Tạo Người Dùng](./assets/create.png)  
* **Các trường nhập liệu**:  
  - First Name, Last Name, Email, Address  
  - Dropdown chọn Gender (Male/Female/Other)  
* **Nút hành động**:  
  - `Create User`: Lưu thông tin người dùng mới  
* **Giao diện**: Design gradient xanh dương, dễ dàng tương tác.  

---

## Cài Đặt & Chạy Ứng Dụng
1. Clone repository:  
   ```bash
   git clone [link-repo]
