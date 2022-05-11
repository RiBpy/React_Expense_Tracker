import React from 'react'
import "./ExpenseDate.css"

export const ExpenseDate = (props) => {
   const day=props.Date.toLocaleString("en-US", { day: "2-digit" }); //to get the day in english in 2 digit(02)
   const month=props.Date.toLocaleString("en-US", { month: "long" });
   const year=props.Date.getFullYear();
  return (
    <div className='expense-date'>
         <div className="expense-date__day"> {day } </div>
         <div className="expense-date__month"> -{month}- </div>
         <div className="expense-date__year">{ year }</div>
    </div>
  );
}
