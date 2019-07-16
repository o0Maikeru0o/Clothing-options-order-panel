import React from 'react';
import styled from 'styled-components';

const FabricContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FabricName = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
`;

const FabricDescription = styled.p`
  margin: 0;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, .1);
`;

const AccordionTabContent = (props) => {
  //render different layout based on Tab Title

  if (props.tabTitle === 'Fabric') {
    return (
      <FabricContentContainer>
        <FabricName>{props.tabContent}</FabricName>
        <FabricDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</FabricDescription>
      </FabricContentContainer>
    );

  } else if (props.tabTitle === 'Care') {
    return (
      <div> Tab Content blablabla</div>
    )
  } else {
    return (
      <div> Tab Content blablabla</div>
    )
  }

};

export default AccordionTabContent;