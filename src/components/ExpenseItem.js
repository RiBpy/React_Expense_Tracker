import React from 'react'
import "./ExpenseItem.css";
import { ExpenseDate } from './ExpenseDate';
import logo from "../assets/logo.png";
export const ExpenseItem = (props) => { 
  return (
    <div className='expense-item'>
        <img src={logo} alt="" />
        <ExpenseDate Date={props.Date}/>
        <div className='expense-item__description'>
            <h2>{props.Title}</h2>
            <div className="expense-item__price">
            {props.Amount}
            </div>
        </div>      
    </div>
  )
}
