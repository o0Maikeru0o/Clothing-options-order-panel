import React from 'react';
import ColorButton from './ColorButton.jsx';
import {ColorContainer, RadioButtonLabel} from '../styling.jsx';
import styled from 'styled-components';

const ColorSelector = (props) => {
  return (
    <ColorContainer>

      {props.colors.map((color) => {
        return <ColorButton key={color} color={color} selectColor={props.selectColor}/>
      })}

      <RadioButtonLabel>{props.selectedColor}</RadioButtonLabel>

    </ ColorContainer>
  );
}

const StyledColorSelector = styled(ColorSelector)`
  display: flex;
  flex-direction: row;
  background: black;
`;


//NOTE: find how to add rules to existing component
export default StyledColorSelector;
