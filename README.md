# DevPulse - Issue Tracking API & Frontend

A full-stack issue tracking application built with modern web technologies. Users can create projects, manage issues, assign roles, and track development progress efficiently.

## 🚀 Live Links

- Frontend Live: https://assignment-02-one-beryl.vercel.app
- GitHub Repository: https://github.com/SR-JISAN/Level-2-Assingment-02

---

# 📌 Features

- 🔐 JWT Authentication & Authorization
- 👤 Role-based Access Control (Admin, Maintainer, Contributor)
- 📝 Create, Update & Delete Issues
- 📂 Project Management System
- 👥 Assign Contributors to Issues
- 🔎 Filter & Search Issues
- 📊 Issue Status Tracking
- ⚡ RESTful API Architecture
- 🌐 Responsive Frontend UI
- 🛡️ Protected Routes & Middleware
- ☁️ PostgreSQL Database Integration

---

# 🛠️ Tech Stack

## Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

## Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT
- bcrypt

## Deployment
- Vercel
- GitHub

---

# 📦 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/SR-JISAN/Level-2-Assingment-02.git
```

## 2️⃣ Navigate to Project Folder

```bash
cd Level-2-Assingment-02
```

## 3️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

---

# ▶️ Run the Project

## Frontend

```bash
npm run dev
```

## Backend

```bash
npm run dev
```

---

# 🔗 API Endpoint List

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

## Users

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users/profile` | Get user profile |

---

## Projects

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/projects` | Create project |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| PATCH | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

---

## Issues

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/issues` | Create issue |
| GET | `/api/issues` | Get all issues |
| GET | `/api/issues/:id` | Get single issue |
| PATCH | `/api/issues/:id` | Update issue |
| DELETE | `/api/issues/:id` | Delete issue |

---

# 🗄️ Database Schema Summary

## Users Table

| Field | Type |
|---|---|
| id | SERIAL |
| name | VARCHAR |
| email | VARCHAR |
| password | TEXT |
| role | VARCHAR |
| created_at | TIMESTAMP |

---

## Projects Table

| Field | Type |
|---|---|
| id | SERIAL |
| title | VARCHAR |
| description | TEXT |
| created_by | INTEGER |
| created_at | TIMESTAMP |

---

## Issues Table

| Field | Type |
|---|---|
| id | SERIAL |
| title | VARCHAR |
| description | TEXT |
| status | VARCHAR |
| priority | VARCHAR |
| project_id | INTEGER |
| reporter_id | INTEGER |
| assignee_id | INTEGER |
| created_at | TIMESTAMP |

---

# 🔐 Authentication

This project uses JWT Authentication.

After login, users receive a token that must be included in request headers:

```bash
Authorization: Bearer <your_token>
```

---

# 🎥 Interview Videos

## Video 1
https://drive.google.com/file/d/11nJ76kivQkYLTia31Uh44bKvMedypasP/view?usp=sharing

## Video 2
https://drive.google.com/file/d/1iOlZ6GvRL53KxALEZZwy4Zq6EgEO2E-1/view?usp=sharing

---

# 👨‍💻 Author

MD Jisan

Frontend & Backend Developer

GitHub: https://github.com/SR-JISAN
