
## 💻 Frontend - React + Tailwind CSS

This project uses **React** for the UI and **Tailwind CSS** for modern responsive styling. It connects to the backend (Spring Boot REST API) using Axios.

### 📁 Folder Structure
```
src/
├── Auth/
│   └── AuthContext.jsx         # Manages auth state using Context API
├── components/
|   ├── EditBlog.jsx            # In which the user can edit the blog
│   ├── Navbar.jsx              # Navigation bar with dynamic login/logout/register visibility
│   └── BlogList.jsx            # Displays blog cards on list pages
├── pages/
│   ├── Login.jsx               # User login page
│   ├── Register.jsx            # New user registration page
│   ├── BlogDetail.jsx            # Public page showing all blogs (paginated)
│   ├── MyBlogs.jsx             # Shows blogs created by logged-in user
│   └── CreateBlog.jsx          # Form for creating a blog
├── App.jsx                     # Route setup
└── main.jsx   
```
### ⚙️ Key Features

- ✅ **Authentication Context**: Uses `AuthContext.jsx` for global auth state
- 🔐 **Login/Register** with Spring Security (form login + HttpSession)
- 📄 **Public Blog Listing**: Anyone can view all blogs with pagination
- ✍️ **Create & Edit Blogs**: Only for logged-in users
- 🎨 **Tailwind CSS**: Fully responsive design for mobile and desktop
- ⚡ **Axios**: API integration with Spring Boot backend

### 📸 UI Screenshots

### Register
 ![Register](https://github.com/user-attachments/assets/fd061cb8-62a3-4f96-85ef-92e0b6591988)
### Login 
![Login](https://github.com/user-attachments/assets/110f97dd-0c8c-48dc-baea-57ea8ee2d0bb)
### AllBlogs
![AllBlogs](https://github.com/user-attachments/assets/5bc94e39-1b1b-443f-b972-ffb4b77042b2)
### CreateBlog
![CreateBlog](https://github.com/user-attachments/assets/d6ede17b-c427-453d-b703-548feee4d49a)
### Edit_Delete_Blog
![Edit_Delete_Blog](https://github.com/user-attachments/assets/55e64402-be4f-434a-8211-6c09d93ff18b)

### Demonstration
