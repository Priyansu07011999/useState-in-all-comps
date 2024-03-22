import './ExpenseForm.css'
import React, {useState} from 'react';


const ExpenseForm = () => {

    // for changing title
    const [enteredtitle, setEnteredtitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChanger = (e) => {
        setEnteredtitle(e.target.value)
    }

    const amountChanger = (e) => {
        setEnteredAmount(e.target.value)
    }
    
    const dateChanger = (e) =>{
        setEnteredDate(e.target.value)
    }
    

    return(
        <form>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChanger}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChanger}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChanger}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}   

export default ExpenseForm;