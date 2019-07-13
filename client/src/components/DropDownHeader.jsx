import React from 'react';
// import { DropDownHeaderContainer } from '../styling.jsx';
import styled from 'styled-components';

const DropDownHeader = (props) => {
  return (
    <div
    onClick={props.toggleDropDown}
    className={props.className}
    >
      Select Size
    </div>
  );
};

export default styled(DropDownHeader)`
  // border: 2px solid red;
  width: 100%;
  height: 100%;
`;

// export default DropDownHeader;
