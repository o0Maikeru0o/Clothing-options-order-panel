import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px;
`;

const RadioButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 5px;
  border: ${(props) => {
    return props.selectedColor === props.value.toLowerCase() ? '1px solid black' : '';
  }};

  :hover {
    cursor: pointer;
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
    <RadioButtonContainer>
      <RadioButton value={props.color.toLowerCase()} onClick={props.selectColor} selectedColor={props.selectedColor}/>
      {/* <RadioButtonLabel>{props.color}</RadioButtonLabel> */}
    </RadioButtonContainer>
  );
};

export default ColorButton;
