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

  function handlePrint() {
    if (expenses.length === 0) {
      alert("No expenses recorded")
      return
    }
    window.print()
  }

  function exportCSV() {
    if (expenses.length === 0) {
      alert("No expenses recorded")
      return
    }

    const header = "Title,Amount,Category,Date\n"
    const rows = expenses
      .map(
        e =>
          `${e.title},${e.amount},${e.category},${new Date(e.date).toLocaleDateString()}`
      )
      .join("\n")
    
    const totalRow = `\n\nTotal Spent,,₹${totalAmount},`

    const blob = new Blob([header + rows + totalRow], { 
      type: "text/csv" 
    })
    
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "expenses.csv"
    a.click()

    URL.revokeObjectURL(url)
  }

  function exportNotes() {
    if (expenses.length === 0) {
      alert("No expenses recorded")
      return
    }

    const content = expenses
      .map(
        e =>
          `• ${e.title} - ₹${e.amount} (${e.category}) on ${new Date(
            e.date
          ).toLocaleDateString()}`
      )
      .join("\n") +
      `\n\nTotal Spent: ₹${totalAmount}`

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "expenses.txt"
    a.click()

    URL.revokeObjectURL(url)
  }


  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  )

  return (
    <main>
      <h1>Expense Tracker</h1>
      <p>
        <strong>Total Spent:</strong> ₹{totalAmount}
      </p>
      <div className="export-actions">
        <button onClick={handlePrint}>
          Print / Save as PDF
        </button>
        <button onClick={exportCSV}>
          Export Excel
        </button>
        <button onClick={exportNotes}>
          Export Notes
        </button>
      </div>

      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
      />
    </main>
  )
}

export default App
