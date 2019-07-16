import React from 'react';
import styled from 'styled-components';
import AccordionTabContent from './AccordionTabContent.jsx';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const TabTitle = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, .1);

  :hover {
    cursor: pointer;
  }
`;

const TabContentContainer = styled.div`
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, .1);
`;

//NOTE: Will probably refactor TabContent to be its own component with rendering based on the title of the tab

const Tab = (props) => {
  if (props.title === props.openedTab) {
    return (
      <TabContainer>
        <TabTitle onClick={props.updateTabDisplay}> {props.title}</TabTitle>
        <TabContentContainer >
          <AccordionTabContent tabTitle={props.title} tabContent={props.content} />
        </TabContentContainer>
      </TabContainer>
    );
  } else {
    return (
      <TabContainer>
        <TabTitle onClick={props.updateTabDisplay} >{props.title}</TabTitle>
      </TabContainer>
    )
  }

};

export default Tab;
