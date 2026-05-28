# Todo List Quote Edition

> A personal productivity project built ~5 months ago as a personal learning experiment. I actively used this app to manage my daily tasks and stay motivated with daily quotes.

## 📌 Overview

A full-featured todo list application with an integrated timer and daily motivational quotes. Built with modern React, Redux for state management, and styled with Tailwind CSS.

## ✨ Features

### 📝 Todo Management
- Add, edit, and delete todos
- Mark todos as completed with checkbox
- Persistent storage using localStorage
- Clean and intuitive interface
<img width="1920" height="1080" alt="Screenshot (7728)" src="https://github.com/user-attachments/assets/010d06c2-5092-4257-9017-708ecd0488bc" />

### ⏱️ Timer Functionality
- Global timer accessible across pages
- Timer page with dedicated controls
- Fullscreen timer mode for focus sessions
- Track work sessions with multiple timers
<img width="1920" height="1080" alt="Screenshot (7730)" src="https://github.com/user-attachments/assets/3da4ca64-495c-469a-8b60-9bde0ac4ba43" />

### 💭 Daily Quotes
- Fetches motivational quotes from API
- Auto-loads on app startup
- Helps maintain motivation while working
- Error handling for API failures


### 🎨 UI/UX
- Dark theme optimized for long work sessions
- Responsive design for all devices
- Smooth navigation between pages
- Toast notifications for user feedback

<img width="1920" height="1080" alt="Screenshot (7732)" src="https://github.com/user-attachments/assets/16f54578-105a-4582-af41-2ccf6fa11a3b" />

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite (Fast refresh & optimized builds)
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Styling**: Tailwind CSS + PostCSS
- **UI Notifications**: React Toastify
- **Code Quality**: ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd todolist-quote-edition

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Todo.jsx              # Main todo page with quotes
│   ├── List.jsx              # Todo list input & display
│   ├── ShowTodo.jsx          # Individual todo item
│   ├── Timer.jsx             # Basic timer component
│   ├── TimerPage.jsx         # Timer page view
│   ├── GlobalTimer.jsx       # Global timer display
│   ├── ShowaTimer.jsx        # Timer display component
│   └── NavBar.jsx            # Navigation bar
├── redux/
│   ├── store.js              # Redux store configuration
│   ├── TodoSlice.js          # Todo state & reducers
│   ├── TimerSlice.js         # Timer state & reducers
│   ├── FullScreenPage.jsx    # Fullscreen timer mode
│   └── Mediapipe.js          # API configuration
├── App.jsx                   # Main app component with routing
└── main.jsx                  # React entry point
```

## 🎯 How It Works

### Local Storage
All todos are automatically saved to localStorage and persist across browser sessions.

### State Management
- **Redux**: Global state for todos and timers
- **React State**: Local component state for UI interactions
- **LocalStorage**: Long-term persistence

### Quote System
Fetches motivational quotes on app load with error handling for graceful fallbacks.

## 🤝 Usage Notes

This is a personal productivity tool built as a learning project. It was actively used for daily task management and focus sessions. Feel free to customize and extend it for your own needs.

## 📦 Dependencies

See `package.json` for complete list of dependencies and devDependencies.

## 📄 License

Personal project - feel free to use and modify as needed.

---

