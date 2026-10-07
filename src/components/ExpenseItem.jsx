function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
      <span>{expense.title}</span>
      <span>${expense.amount}</span>

      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;