# Employee Management System

A full-stack Employee Management System built using **FastAPI**, **React**, **SQLite**, **SQLAlchemy**, and **Axios**.

## Features

- Add Employee
- View Employee List
- Update Employee Details
- Delete Employee
- Search Employees by Name
- Filter Employees by Department
- Responsive Dashboard UI

---

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- FastAPI
- SQLAlchemy
- SQLite

---

## Project Structure

```
Employee_Management_System/
│
├── backend/
│   ├── app/
│   ├── venv/
│   └── requirements.txt
│
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

---

# Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/maitreyee6803/Employee_Management_System.git
cd Employee_Management_System
```

---

## 2. Backend Setup

```bash
cd backend

python -m venv venv
```

### Activate Virtual Environment

**Windows**

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install fastapi uvicorn sqlalchemy pydantic email-validator
```

Start the backend server

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## 3. Frontend Setup

Open another terminal.

```bash
cd frontend

npm install
npm install axios

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Features Implemented

- Create Employee
- Read Employees
- Update Employee
- Delete Employee
- Search Employee
- Department Filter
- REST API Integration
- Responsive Dashboard

---

## Author

Maitreyee Durugkar
