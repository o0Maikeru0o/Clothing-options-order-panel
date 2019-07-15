import React from 'react';
import {NamePriceContainer, ItemName, ItemPrice, CurrencyTag} from '../styling.jsx';

const NameAndPrice = (props) => {
  return (
    <NamePriceContainer>
      <ItemName>{props.name}</ItemName>
      <br></br>
      <ItemPrice>
        {props.price}
        <CurrencyTag>USD</CurrencyTag>
      </ItemPrice>

    </NamePriceContainer>
  )
};

export default NameAndPrice;
