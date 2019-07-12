import React from 'react';
import { RadioButtonContainer, RadioButton, RadioButtonLabel } from '../styling.jsx';

const ColorButton = (props) => {
  return (
    <RadioButtonContainer>
      <RadioButton value={props.color.toLowerCase()} onClick={props.selectColor}/>
      <RadioButtonLabel>{props.color}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};

export default ColorButton;
