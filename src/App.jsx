import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", [])

  function addExpense(expense) {
    setExpenses(prev => [...prev, expense])
  }

  function deleteExpense(id) {
    setExpenses(prev => prev.filter(exp => exp.id !== id))
  }

  return (
    <main>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
      />
    </main>
  )
}

export default App
