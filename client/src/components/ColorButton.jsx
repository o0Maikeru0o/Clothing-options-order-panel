import React from 'react';
import { RadioButton, RadioButtonLabel } from '../styling.jsx';

const ColorButton = (props) => {
  return (
    <div>
      <RadioButton />
      <RadioButtonLabel>{props.color}</RadioButtonLabel>
    </div>
  );
};

export default ColorButton;