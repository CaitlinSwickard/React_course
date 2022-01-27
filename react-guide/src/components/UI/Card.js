// this card file is now a wrapper around expenses and expenseitem and holds the styling for the card components

import React from 'react';
import './Card.css';

const Card = (props) =>{
  // anything that we receive as a classname from outside is added to this string.
  const classes = "card " + props.className;

  // props.children//children is a reserved name
  // the value for this children prop will always be the content between the opening and closing tags of your custom components
  // for this example it is all the content between the Card tags on ExpenseItem.js
  return <div className={classes}>{props.children}</div>;
}

export default Card;