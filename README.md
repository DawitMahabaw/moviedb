# 🎬 Netflix Clone

A modern **Netflix-inspired streaming web application** built with React. This project recreates the core Netflix browsing experience, including movie/TV show discovery, categories, search, and a responsive user interface.

> ⚠️ **Disclaimer:** This is a personal educational project inspired by Netflix. It is not affiliated with or endorsed by Netflix.

---

## 🚀 Features

* 🎬 Netflix-inspired responsive UI
* 🏠 Home page with featured content
* 📺 TV Shows and Movies sections
* 🔥 New & Popular content
* 🔍 Movie/show search
* 🔔 Notification UI
* 👤 User profile interface
* 📋 My List functionality
* 🌍 Browse content by language
* 📱 Responsive design for different screen sizes
* 🎞️ Dynamic movie data using an external API

---

## 🛠️ Technologies Used

### Frontend

* **React** — UI development
* **React Router** — Client-side routing
* **CSS Modules** — Component-scoped styling
* **Lucide React** — Icons
* **JavaScript (ES6+)**
* **Vite** — Development environment and build tool

### API

* Movie/TV show data is retrieved from an external movie API.

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── image/
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   │
│   ├── Hero/
│   ├── MovieCard/
│   ├── MovieRow/
│   └── Footer/
│
├── pages/
│   ├── Home/
│   ├── Movies/
│   ├── TVShows/
│   └── MyList/
│
├── App.jsx
├── main.jsx
└── index.css
```

> The exact structure may change as the project develops.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd netflix-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available at the local address provided by Vite.

---

## 🔑 Environment Variables

If the project uses an API that requires an API key, create a `.env` file in the project root:

```env
VITE_API_KEY=your_api_key_here
VITE_API_BASE_URL=your_api_base_url
```

Make sure `.env` is included in `.gitignore` so private API keys are not committed to Git.

---

## 🧠 What I Learned

This project was created to practice and strengthen my understanding of:

* React components
* Props and state
* React Hooks
* Conditional rendering
* React Router
* API integration
* Fetch/Axios
* Asynchronous JavaScript
* Error handling
* Search functionality
* Responsive UI development
* CSS Modules
* Reusable components
* Environment variables
* Git and GitHub

---

## 🔮 Future Improvements

* [ ] User authentication
* [ ] Real user profiles
* [ ] Movie details page
* [ ] Movie trailers
* [ ] Add/remove movies from My List
* [ ] Advanced search and filtering
* [ ] Pagination / infinite scrolling
* [ ] Loading skeletons
* [ ] Better error handling
* [ ] Dark/light theme support
* [ ] Backend API
* [ ] Database integration
* [ ] Deployment

---

## 📸 Screenshots

Add screenshots of your application here as the project develops.

```text
screenshots/
├── home.png
├── movies.png
├── search.png
└── mobile.png
```

---

## 🎯 Project Goal

The goal of this project is to build a realistic, modern React application while gaining practical experience with **frontend development, API integration, component architecture, and responsive UI design**.

---

## 👨‍💻 Author

**Dave**

Built as a learning project while developing full-stack web development skills.

---

## ⭐ If You Like the Project

If you find this project useful or interesting, feel free to ⭐ the repository and explore the code.
