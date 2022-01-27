// custom components must start with Capita letter
// you can only have one ROOT element per jsx elements, liked wrapped in the  return ( wrapped in div).
// css is used under className instead of class
// make sure to import the CSS file for the component

import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

// passing props (key/value pairs)
// the props we are passing here are coming form the expense array we created in App.js
// so props.title is coming from App.js
function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        {/* the {} are JSX expresions */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;