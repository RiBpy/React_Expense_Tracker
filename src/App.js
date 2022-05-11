import { ExpenseItem } from "./components/ExpenseItem";

import "./App.css";
function App() {
  const Header={
    color:"#fff",
    fontSize:"25px",
    padding:'10px'
  }
  const Expenses=[
    { 
     
      id:1,
      title:"React Course",
      date:new Date(2022,3,3),
      amount:"10k",
      
    },
    {
      id:2,
      title:"JS Course",
      date:new Date(2022,3,31),
      amount:"15k", 
    },
    {
      id:3,
      title:"Laravel Course",
      date:new Date(2022,4,11),
      amount:"5k",
    },
    {
      id:4,
      title:"MERN Course",
      date:new Date(2022,7,17),
      amount:"20k",
    },
  ]
  
  return (
    <div className="App">
      <div style={Header}>React Expense Tracker</div>
      <ExpenseItem
      Title={Expenses[0].title}
      Date={Expenses[0].date}
      Amount={Expenses[0].amount}
      
      />
      <ExpenseItem
      Title={Expenses[1].title}
      Date={Expenses[1].date}
      Amount={Expenses[1].amount}
      
      />
      <ExpenseItem
      Title={Expenses[2].title}
      Date={Expenses[2].date}
      Amount={Expenses[2].amount}
      
      />
    </div>
  );
}

export default App;
