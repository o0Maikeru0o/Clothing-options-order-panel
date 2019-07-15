import React from 'react';
import styled from 'styled-components';
import SizeDropDown from './SizeDropDown.jsx';
import { SizeContainer } from '../styling.jsx';

const SizeSelector = (props) => {
  return (
    <div className={props.className}>
      <SizeContainer>
        <SizeDropDown sizes={props.sizes}/>
      </SizeContainer>
    </div>
  );
}

export default styled(SizeSelector)`
  padding: 0;
  max-width: 300px;
`;

// export default SizeSelector;
