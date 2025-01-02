# Blogging Platform Backend

This project implements a backend for a blogging platform, enabling users to create, update, and delete blogs. It includes two roles: **Admin** and **User**, each with specific permissions. The platform supports secure authentication, role-based access control, and public APIs for viewing blogs with search, sort, and filter functionalities.

---

## 🌐 Live URL

Access the live API documentation or backend at: [Your Live URL Here](#)

---

## Table of Contents

- [Technologies](#technologies)
- [Features and Requirements](#features-and-requirements)
- [Models](#models)
  - [User Model](#user-model)
  - [Blog Model](#blog-model)
- [API Endpoints](#api-endpoints)
  - [Authentication](#1-authentication)
  - [Blog Management](#2-blog-management)
  - [Admin Actions](#3-admin-actions)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

---

## Technologies

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---

## Features and Requirements

### 1. User Roles

#### Admin:

- Created manually in the database with predefined credentials.(email:admin@gmail.com,password:12345678)
- Can delete any blog.
- Can block users by setting `isBlocked` to `true`.
- Cannot update any blog.

#### User:

- Can register and log in.
- Can create, update, and delete their own blogs.
- Cannot perform admin-specific actions.

### 2. Authentication & Authorization

#### Authentication:

- Users must log in to perform create, update, and delete operations.

#### Authorization:

- Role-based access control differentiates Admins and Users.

### 3. Blog API

- Public API for reading blogs.
- Supports search, sort, and filter functionalities.
- Includes blog title, content, and author details.

---

### 4. Setup and Installation

- In the terminal git clone https://github.com/tahminabithy/blog-management
- cd blog-management
- npm install
- setup .env file

## Models

### User Model

```typescript
{
  name: string; // Full name of the user
  email: string; // Email address used for authentication
  password: string; // Securely hashed password
  role: "admin" | "user"; // User role (default: "user")
  isBlocked: boolean; // Indicates if the user is blocked (default: false)
  createdAt: Date; // Timestamp of user creation
  updatedAt: Date; // Timestamp of the last update
}
```
