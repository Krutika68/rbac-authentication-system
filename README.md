# RBAC Authentication System

## Overview
This project implements a role-based access control (RBAC) authentication system with user registration, login, and role-based resource access.

### Features
- User registration and login with hashed passwords.
- JWT-based authentication for secure sessions.
- Role-based access control (Admin, User, Moderator).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Krutika68/rbac-authentication-system.git
   cd rbac-authentication-system

2. Install dependencies:

   bash
   npm install

3. Create a .env file in the root directory with the following content:

   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=mongodb://localhost:27017/rbac_db
   PORT=5000

4. Start the server:

   bash 
   node app.js

Endpoints:

   POST /api/auth/register - Register a new user
   POST /api/auth/login - Login and get a JWT token
   GET /api/admin - Accessible only by Admin users
   GET /api/user - Accessible by all authenticated users

Technologies Used:
 
   Node.js for the server-side runtime environment.
   Express for building the REST API.
   MongoDB as the database to store user data.
   Mongoose to interact with MongoDB using an object-data mapping library.
   bcryptjs for password hashing and validation.
   jsonwebtoken (JWT) for token-based authentication.
   dotenv for managing environment variables securely.

Project Structure:

├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   └── authController.js # Authentication logic (login, register)
├── middleware/
│   ├── authMiddleware.js # JWT Authentication middleware
│   └── roleMiddleware.js # Role-based access control middleware
├── models/
│   └── User.js          # Mongoose User model (password hashing, role assignment)
├── routes/
│   └── authRoutes.js    # Routes for authentication (login, register)
├── .env                 # Environment variables (JWT_SECRET, MONGO_URI, PORT)
├── app.js               # Express server setup
└── package.json         # NPM dependencies

License
This project is licensed under the MIT License - see the LICENSE file for details. 
