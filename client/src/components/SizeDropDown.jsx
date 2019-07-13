import React from 'react';
import styled from 'styled-components';
import { DropDownList, DropDownItem } from '../styling.jsx';
import DropDownHeader from './DropDownHeader.jsx';

class SizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleDropDown() {
    this.setState({ dropDownOpen: !this.state.dropDownOpen})
  }

  render() {
    return (
      <div className={this.props.className}>
        <DropDownHeader toggleDropDown={this.toggleDropDown}/>
        <DropDownList dropDownOpen={this.state.dropDownOpen}>
          {this.props.sizes.map((size) => {
            return <DropDownItem>{size}</DropDownItem>
          })}
        </DropDownList>
      </div>
    );
  }
};

export default styled(SizeDropDown)`
  // border: 2px solid green;
  width: 100%;
`;

// export default SizeDropDown;
