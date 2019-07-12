import React from 'react';
import {NamePriceContainer, ItemName, ItemPrice} from '../styling.jsx';

const NameAndPrice = (props) => {
  return (
    <NamePriceContainer>
      <ItemName>{props.name}</ItemName>
      <br></br>
      <ItemPrice>{props.price} USD</ItemPrice>
    </NamePriceContainer>
  )
};

export default NameAndPrice;
