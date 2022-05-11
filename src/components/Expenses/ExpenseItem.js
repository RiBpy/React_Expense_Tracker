import "./ExpenseItem.css";
import { ExpenseDate } from './ExpenseDate';
import Card from "../UI/Card"
import logo from "../../assets/logo.png";

 const ExpenseItem = (props) => { 
  return (
    <Card className="expense-item">
        <img src={logo} alt="" />
        <ExpenseDate Date={props.Date}/>
        <div className='expense-item__description'>
            <h2>{props.Title}</h2>
            <div className="expense-item__price">
            {props.Amount}
            </div>
        </div>      
    </Card>
  );
}

export default ExpenseItem;