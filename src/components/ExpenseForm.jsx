import { useState } from "react"

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !amount || !category) {
      return
    }

    const expense = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category,
      date: new Date().toISOString()
    }

    onAddExpense(expense)

    setTitle("")
    setAmount("")
    setCategory("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
