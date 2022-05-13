import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

 const NewExpense = (props) => {
    const newExpenseDataHandler=(receivedData)=>{
        const expenseData={
          id:Math.random().toString(),
            ...receivedData          
        }
     props.newData(expenseData);
    }
  return (
    <div className='new-expense'>
        <ExpenseForm newExpenseDataReceiver={newExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense