import React from 'react';
import styled from 'styled-components';
import SizeDropDown from './SizeDropDown.jsx';

const SizeContainer = styled.div`
  height: 40px;
  display: flex;
  padding: 0;
  background: white;
  margin: 0px 0px 30px;
  border: 1px solid rgba(0, 0, 0, .1);
`;

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
