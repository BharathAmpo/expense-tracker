import ExpenseItem from "./ExpenseItem"

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>
  }

  return (
    <ul>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
