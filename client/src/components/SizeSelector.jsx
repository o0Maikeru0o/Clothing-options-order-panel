import React from 'react';
import SizeDropDown from './SizeDropDown.jsx';
import { SizeContainer } from '../styling.jsx';

const SizeSelector = (props) => {
  return (
    <SizeContainer>
      <SizeDropDown sizes={props.sizes}/>
    </SizeContainer>
  );
}

export default SizeSelector;