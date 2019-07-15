import React from 'react';
import styled from 'styled-components';

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

const TabContent = styled.div`
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, .1);

`;

const Tab = (props) => {
  if (props.title === props.openedTab) {
    return (
      <TabContainer>
        <TabTitle onClick={props.updateTabDisplay}> {props.title}</TabTitle>
        <TabContent> {props.content} </TabContent>
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
