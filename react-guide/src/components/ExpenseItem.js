// custom components must start with Capita letter
// you can only have one ROOT element per jsx elements, liked wrapped in the  return ( wrapped in div).
// css is used under className instead of class
// make sure to import the CSS file for the component

import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;