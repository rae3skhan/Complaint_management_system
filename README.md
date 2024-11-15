# Complaint Management System

This project is a Complaint Management System built with React and Vite. It allows users to manage complaints with different statuses such as pending, solved, and rejected. The system also includes authentication for admin and super-admin roles.

## Features

- **Authentication**: Admin and Super-Admin roles with protected routes.
- **Complaint Management**: Add, view, and manage complaints.
- **Admin Requests**: Super-Admin can manage admin requests.
- **Responsive Design**: Built with Tailwind CSS and Bootstrap for responsive design.

## Project Structure

.gitignore eslint.config.js index.html LICENSE package.json postcss.config.js public/ README.md src/ App.jsx assets/ images/ Component/ Admin/ Dashbaord.jsx Buttons/ Buttons.jsx ComplaintsFolder/ Complaints.jsx Login/ Login.jsx SAadmin.jsx/ SAdashbaord.jsx Tables/ AddCases.jsx AdminRequest.jsx PendingCases.jsx RejectedCases.jsx SolvedCases.jsx context/ AuthContext.jsx index.css main.jsx tailwind.config.js vite.config.js


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/complaint-management-system.git
    cd complaint-management-system
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm run dev
    ```

4. Navigate to the backend directory and install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

5. Start the backend server:
    ```sh
    node server.js
    ```

## Usage

- **Register**: Go to `/register` to create a new account.
- **Login**: Use the registered credentials to log in.
- **Dashboard**: Depending on the role, users will be redirected to the appropriate dashboard.

## Authentication

Authentication is managed using a custom context in `src/context/AuthContext.jsx`. Routes are protected based on the user's role using the `ProtectedRoute` component in `src/main.jsx`.

## Components

- **Admin Dashboard**: `src/Component/Admin/Dashbaord.jsx`
- **Super-Admin Dashboard**: `src/Component/SAadmin.jsx/SAdashbaord.jsx`
- **Complaints**: `src/Component/ComplaintsFolder/Complaints.jsx`
- **Add Cases**: `src/Component/Tables/AddCases.jsx`
- **Pending Cases**: `src/Component/Tables/PendingCases.jsx`
- **Rejected Cases**: `src/Component/Tables/RejectedCases.jsx`
- **Solved Cases**: `src/Component/Tables/SolvedCases.jsx`
- **Admin Requests**: `src/Component/Tables/AdminRequest.jsx`
- **Buttons**: `src/Component/Buttons/Buttons.jsx`
- **Login**: `src/Component/Login/Login.jsx`
- **Register**: `src/Component/Register/Register.jsx`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

