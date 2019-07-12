import React from 'react';
import ColorButton from './ColorButton.jsx';
import {ColorContainer} from '../styling.jsx';

const ColorSelector = (props) => {
  return (
    <ColorContainer>
      Color selector goes here

      {/* {props.colors.map((color) => {
        return <ColorButton color={color}/>
      })} */}

      <ColorButton colors={props.colors} />
    </ ColorContainer>
  );
}

export default ColorSelector;
