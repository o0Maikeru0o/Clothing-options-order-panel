import React from 'react';
import styled from 'styled-components';
import AccordionTabContent from './AccordionTabContent.jsx';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: white;
  box-shadow: 0 4px 1.5px -1.5px rgba(0, 0, 0, .1);
`;

const TabTitle = styled.div`
  padding: 10px;
  background-color: white;

  :hover {
    cursor: pointer;
  }
`;

const TabContentContainer = styled.div`
  padding: 5px;
  transition: height 1s;
`;

//NOTE: Will probably refactor TabContent to be its own component with rendering based on the title of the tab

const Tab = (props) => {
  if (props.title === props.openedTab) {
    return (
      <TabContainer>
        <TabTitle onClick={props.updateTabDisplay}> {props.title}</TabTitle>
        <TabContentContainer >
          <AccordionTabContent
          fabric={props.fabric}
          care={props.care}
          tabTitle={props.title}
          tabContent={props.content}
          features={props.features}
          />
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
