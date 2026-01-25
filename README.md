# Expense Tracker

Live Demo: [website](https://bharathampo.github.io/expense-tracker/)

 A Single Page Application (SPA) built with React to record daily expenses, calculate totals, and ensure client-side persistence using localStorage, The application demonstrates clean component structure, predictable state management, and provides options to export expense data as PDF, Excel, and Word documents.

## Features

- Add and delete expenses
- Categorize expenses
- View total expenses
- Responsive layout
- Export expense data as PDF, Excel, and Word documents for easy sharing and record-keeping.

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3
- GitHub Pages for deployment

## Concepts Demonstrated

- Component-based architecture
- Custom Hooks (useLocalStorage)
- State management with React Hooks
- Client-side persistence using localStorage
- Conditional rendering and controlled inputs
- Production build and deployment with Vite

## Folder Structure

```text
expense-tracker/
├── public/
│ └── googlee6572223bcfd2310.html
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseItem.jsx
│   │   └── ExpenseList.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── styles/
│   │   └── app.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## 1. Setup Instructions

### How to run locally

```bash
npm install
npm run dev
```

## 2. Build & Deploy

```bash
npm run build
npm run preview
npm run deploy
```
