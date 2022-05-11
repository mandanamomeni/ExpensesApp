import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // array destructuring to store both element in separate variables or constant. here we use constant
  const [title, setTitle] = useState(props.title);
  // here title is the current value(props.title) ans setTitle is a function for updating the title.

  const clickHandler = () => {
    setTitle('update');
    console.log(title);
  };
  return (
    //<li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
    //</li>
  )
}

export default ExpenseItem;