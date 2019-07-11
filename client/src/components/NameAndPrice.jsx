import React from 'react';

const NameAndPrice = (props) => {
  return (
    <div>
      <div>Name & Price go here: </div> <br></br>
      {props.name} <br></br>
      {props.price}
    </div>
  )
};

export default NameAndPrice;
