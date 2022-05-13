
import "./ExpenseItem.css";
import { ExpenseDate } from './ExpenseDate';
import Card from "../UI/Card"
import logo from "../../assets/logo.png";
import React from "react";

 const ExpenseItem = (props) => { 
  // const [title,setTitle]=useState(props.Title)
  // const [newTitle,setNewTitle]=useState("")
  // const addNewTitle=(e)=>{
  //   setNewTitle(e.target.value)
  // }
  //  const changeTitle=()=>{
  //   setTitle(newTitle)
  //  }
  return (
    <Card className="expense-item">
        <img src={logo} alt="" />
        <ExpenseDate Date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className="expense-item__price">
            {props.amount}
            </div>
        </div>   
      {/* <input className="expense_new" type="text" onChange={addNewTitle} id="newExpense" />
      <button onClick={changeTitle} className="expense_title_change_button">Change Title</button>    */}
    </Card>
  );
}

export default ExpenseItem;