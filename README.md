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

2. Install dependencies : npm install

3. Create a .env file in the root directory with the following content :

   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=mongodb://localhost:27017/rbac_db
   PORT=5000

4. Start the server : node app.js

Endpoints:

   1. POST /api/auth/register - Register a new user
   2. POST /api/auth/login - Login and get a JWT token
   3. GET /api/admin - Accessible only by Admin users
   4. GET /api/user - Accessible by all authenticated users

Technologies Used:
 
   1. Node.js for the server-side runtime environment.
   2. Express for building the REST API.
   3. MongoDB as the database to store user data.
   4. Mongoose to interact with MongoDB using an object-data mapping library.
   5. bcryptjs for password hashing and validation.
   6. jsonwebtoken (JWT) for token-based authentication.
   7. dotenv for managing environment variables securely.

License:
This project is licensed under the MIT License - see the LICENSE file for details. 
