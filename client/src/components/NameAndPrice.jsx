import React from 'react';

export const NamePriceContainer = styled.div`
  padding: 0.5em;
  background: rgb(250,250,250)
`;

const ItemName = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
`;

const ItemPrice = styled.div`
  font-size: 1rem;
  font-weight: 100;
  display: flex;
  margin: 0px 0px 45px;
`;

const CurrencyTag = styled.div`
  font-size: .75rem;
  padding: .75% 1% 0px;
`;

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
