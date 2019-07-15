import React from 'react';
import styled from 'styled-components';
import { DropDownList, DropDownItem } from '../styling.jsx';
import DropDownHeader from './DropDownHeader.jsx';

class SizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
      selectedSize: '0',
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleDropDownSubmit = this.handleDropDownSubmit.bind(this);
  }

  toggleDropDown() {
    this.setState({ dropDownOpen: !this.state.dropDownOpen})
  }

  handleDropDownSubmit(event) {
    // console.log(event.target)
    this.setState({
      selectedSize: event.target.value,
      dropDownOpen: false,
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <DropDownHeader selectedSize={this.state.selectedSize} toggleDropDown={this.toggleDropDown}/>
        <DropDownList dropDownOpen={this.state.dropDownOpen}>
          {this.props.sizes.map((size) => {
            return <DropDownItem key={size} value={size} onClick={this.handleDropDownSubmit}>{size}</DropDownItem>
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
