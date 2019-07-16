import React from 'react';
// import { DropDownHeaderContainer } from '../styling.jsx';
import styled from 'styled-components';

const SelectedSize = styled.div`
  margin-left: 69%;
  margin-top: 8px;
`;

const DropDownLabel = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

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
