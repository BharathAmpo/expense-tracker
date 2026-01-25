# Expense Tracker

Live Demo: [website](https://bharathampo.github.io/expense-tracker/)
A simple expense tracking application built with React to record daily expenses, calculate totals, and persist data in the browser using localStorage. This project focuses on clean component structure and predictable state management. A Single Page Application (SPA) built with React to record daily expenses, calculate totals, and ensure client-side persistence using localStorage, with options to export data as PDF, Excel, and Word documents.

## Features

- Add and delete expenses
- Categorize expenses
- View total expenses
- Responsive layout (basic)
- Data persists across page reloads using localStorage
- Calculates total expenses dynamically
- Export expense data as PDF, Excel, and Word documents for easy sharing and record-keeping.

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3

## Folder Structure

```text
expense-tracker/
├── public/
│ └── googlee6572223bcfd2310.html
├── src/
│ ├── components/
│ │ ├── ExpenseForm.jsx
│ │ ├── ExpenseItem.jsx
│ │ └── ExpenseList.jsx
│ ├── hooks/
│ │ └── useLocalStorage.js
│ ├── styles/
│ │ └── app.css
│ ├── App.jsx
│ └── main.jsx
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
