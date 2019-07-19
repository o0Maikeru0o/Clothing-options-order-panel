import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px;
  padding: .3rem;
`;

const RadioButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 5px;
  border: ${(props) => {
    return props.selectedColor.colorName === props.value.toLowerCase() ? '1px solid black' : '';
  }};


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
    <RadioButtonContainer selectedColor={props.selectedColor}>
      <RadioButton
      value={props.color.toLowerCase()}
      onClick={props.selectColor}
      selectedColor={props.selectedColor}
      selectedSize={props.selectedSize}
      />
    </RadioButtonContainer>
  );
};

export default ColorButton;
