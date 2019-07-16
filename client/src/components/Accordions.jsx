import React from 'react';
import styled from 'styled-components';
import AccordionTab from './AccordionTab.jsx';

const AccordionContainer = styled.div`
  padding: 0;
  background: rgb(250,250,250);
  margin: 0px 0px 30px;
  // border: 1px solid rgba(0, 0, 0, .1);
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       openedTab: null,
    }
    this.updateTabDisplay = this.updateTabDisplay.bind(this);
  }

  updateTabDisplay(event) {
    console.log(event.target.innerHTML)
    this.setState({ openedTab: event.target.innerHTML })
  }

  render() {
    const tabs = [
      {
        id: 1,
        title: 'Fabric',
        content: this.props.fabric,
      },
      {
        id: 2,
        title: 'Care',
        content: this.props.care,
      },
      {
        id: 3,
        title: 'Features',
        content: 'this is where features goes',
      }
    ];

    return (
      <AccordionContainer>
        {tabs.map((tab, index) => {
          return (
            <AccordionTab
              openedTab={this.state.openedTab}
              updateTabDisplay={this.updateTabDisplay}
              key={tab.id}
              content={tab.content}
              title={tab.title}
              tabId={tab.id}
              openedTab={this.state.openedTab}
              care={this.props.care}
              designedFor={this.props.designedFor}
            />
          );
        })}
      </AccordionContainer>
    );
  }
};


export default Accordion;
