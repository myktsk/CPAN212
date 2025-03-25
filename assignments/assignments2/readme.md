# 🍽️ Recipe App API

This project provides a full-stack Recipe App with a backend built on Node.js/Express and a frontend using a modern JavaScript framework. It allows users to create, view, update, and delete recipes.

## 📦 Installation & Running the App

### Backend Setup

```bash
cd server
npm install
npm run start
```

The backend server will run on **http://localhost:8001**

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend client will run on **http://localhost:5173** (or whichever port your dev server specifies).

---

## 🔌 API Endpoints

All routes are prefixed with `/recipe`

| Method | Endpoint      | Description                        |
| ------ | ------------- | ---------------------------------- |
| GET    | `/recipe`     | Fetch all recipes                  |
| POST   | `/recipe`     | Add a new recipe to the collection |
| GET    | `/recipe/:id` | Fetch a single recipe by ID        |
| PUT    | `/recipe/:id` | Update a recipe by ID              |
| DELETE | `/recipe/:id` | Delete a recipe by ID              |

---

## 📂 Project Structure

```
.
├── client          # Frontend application
└── server          # Backend API
```

---

## ✅ Features

- Add new recipes
- Browse all recipes
- View detailed recipe by ID
- Edit and update existing recipes
- Delete recipes from the collection
