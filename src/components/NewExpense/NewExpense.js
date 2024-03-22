import React from "react";
import './NewExpense.css'
import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense = () => {
    return(
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense;