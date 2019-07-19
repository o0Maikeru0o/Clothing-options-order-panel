import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  padding: .055rem;
  border: ${(props) => {
    return props.color === props.selectedColor ? '1.3px solid black' : '';
  }};
`;

const RadioButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 2px;

  :hover {
    cursor: pointer;
    // opacity: .75;
  }
`;

const RadioButtonLabel = styled.div`
  height: auto;
  width: auto;
  font-weight: 300;
  line-height: 1.25;
  margin: 0 auto 1rem;
`;

const ColorButton = (props) => {
  return (
    <RadioButtonContainer selectedColor={props.selectedColor} color={props.color}>
      <RadioButton
      color={props.color}
      value={props.color.toLowerCase()}
      onClick={props.selectColor}
      selectedColor={props.selectedColor}
      selectedSize={props.selectedSize}
      />
    </RadioButtonContainer>
  );
};

export default ColorButton;
