import React from 'react';
import ColorButton from './ColorButton.jsx';
import {ColorContainer, RadioButtonLabel} from '../styling.jsx';
import styled from 'styled-components';

const ColorSelector = (props) => {
  return (
    <ColorContainer className={props.className}>

      {props.colors.map((color) => {
        return <ColorButton key={color} color={color} selectColor={props.selectColor}/>
      })}

      <RadioButtonLabel>{props.selectedColor}</RadioButtonLabel>

    </ ColorContainer>
  );
}

export default styled(ColorSelector)`
  display: flex;
  flex-direction: row;
  background: snow;
`;
