import React from 'react';

const NameAndPrice = (props) => {
  return (
    <div>
      {props.name} <br></br>
      {props.price}
    </div>
  )
};

export default NameAndPrice;
