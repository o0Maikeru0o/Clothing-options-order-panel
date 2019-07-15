import React from 'react';
import ColorButton from './ColorButton.jsx';
import {RadioButtonLabel} from '../styling.jsx';
import styled from 'styled-components';

const ColorContainer = styled.div`
  background: rgb(250,250,250);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
  border-top: 1px solid rgba(0, 0, 0, .3);
`;

const ColorSelector = (props) => {
  return (
    <ColorContainer className={props.className}>

      {props.colors.map((color) => {
        return <ColorButton
        key={color}
        color={color}
        selectColor={props.selectColor}
        selectedColor={props.selectedColor}
        />
      })}

      <RadioButtonLabel>{props.selectedColor.charAt(0).toUpperCase() + props.selectedColor.slice(1)}</RadioButtonLabel>

    </ ColorContainer>
  );
}

export default styled(ColorSelector)`
  display: flex;
  flex-direction: row;
  background: snow;
`;
