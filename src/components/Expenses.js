import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";

export const Expenses = (props) => {
  return (
    <div className="expenses">
         <ExpenseItem
      Title={props.item[0].title}
      Date={props.item[0].date}
      Amount={props.item[0].amount}
      />
      <ExpenseItem
      Title={props.item[1].title}
      Date={props.item[1].date}
      Amount={props.item[1].amount}
      />
      <ExpenseItem
      Title={props.item[2].title}
      Date={props.item[2].date}
      Amount={props.item[2].amount} 
      />
    </div>
  )
}
