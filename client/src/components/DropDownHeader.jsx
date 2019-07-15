import React from 'react';
import { SelectedSize, DropDownLabel } from '../styling.jsx';
// import { DropDownHeaderContainer } from '../styling.jsx';
import styled from 'styled-components';

const DropDownHeader = (props) => {
  return (
    <div
    onClick={props.toggleDropDown}
    className={props.className}
    >
      <DropDownLabel>Size</DropDownLabel>

      <SelectedSize>{props.selectedSize} ▽ </SelectedSize>
    </div>
  );
};

export default styled(DropDownHeader)`
  // border: 2px solid red;
  display: flex;
  width: 100%;
  height: 100%;
  :hover {
    cursor: pointer;
  }
`;

// export default DropDownHeader;
