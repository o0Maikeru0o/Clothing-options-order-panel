import React from 'react';
import {NamePriceContainer} from '../styling.jsx';

const NameAndPrice = (props) => {
  return (
    <NamePriceContainer>
      {props.name} <br></br>
      {props.price}
    </NamePriceContainer>
  )
};

export default NameAndPrice;
