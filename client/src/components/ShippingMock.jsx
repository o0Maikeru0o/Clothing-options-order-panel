import React from 'react';
import styled from 'styled-components';

const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, .3);
  margin-down: 10rem;
  padding: 1.5rem;
`;

const ShippingButton = styled.span`
  display: flex;
  width: 100%;
  height: .85rem;
  // border: 1px solid purple;
  margin: 1rem;
`;

const SelectButton = styled.div`
  background: red;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  margin-right: .75rem;
  border: 1px solid black;

  .selected {
    background-color: white;
  }
`;

const SelectLabel = styled.span`
  font-weight: bold;
`;

const AddToCart = styled.button`
  width: 100%;
  height: 2rem;
  background: crimson;
  font-color: white;
  padding: 1rem;
  text-align: center;
  color: white;
  font-size: .7rem;
  font-weight: 400;
  margin-top: 2rem;
`;

const ShippingMock = (props) => {
  return (
    <ShippingContainer >
      <ShippingButton >
        <SelectButton />
        <SelectLabel>Ship</SelectLabel>
      </ShippingButton>
      <ShippingButton >
        <SelectButton />
        <SelectLabel>Pickup in store</SelectLabel>
        <br></br>
      </ShippingButton>
      <div>Order before 5pm and pickup today.</div>
      <AddToCart></AddToCart>
    </ShippingContainer>
  );
}

export default styled(ShippingMock)`
  margin-down: 1rem;
`;