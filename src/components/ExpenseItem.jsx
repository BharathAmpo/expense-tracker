function ExpenseItem({ expense, onDeleteExpense }) {
  return (
    <li>
      <span>
        {expense.title} - ₹{expense.amount}
      </span>
      <button onClick={() => onDeleteExpense(expense.id)}>
        Delete
      </button>
    </li>
  )
}

export default ExpenseItem