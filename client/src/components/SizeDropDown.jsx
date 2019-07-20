import React from 'react';
import styled from 'styled-components';
import DropDownHeader from './DropDownHeader.jsx';

const DropDownList = styled.ul`
  display: flex;
  z-index: 1;
  flex-direction: column;
  padding: 0;
  margin: 0px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, .1);
  visibility: ${(props) => {
    return props.dropDownOpen ? 'visible' : 'hidden';
  }}
`;

const DropDownItem = styled.li`
  display: block;
  z-index: 2;
  transition-duration: 0.2s;
  height: 40px;
  width: 100%;
  padding-top: 1em;
  background: white;
  text-align: center;

  :hover {
    cursor: pointer;
    background: rgba(250, 250, 250, 1);
  }
`;

const SizeDropDown = (props) => {
  return (
    <div className={props.className}>
      <DropDownHeader selectedSize={props.selectedSize} selectedColor={props.selectedColor} toggleDropDown={props.toggleDropDown}/>
      <DropDownList dropDownOpen={props.dropDownOpen}>
        {props.sizes.map((size) => {
          if (size.stock === 0) {
            return <DropDownItem key={size.size} value={size.size} onClick={props.handleDropDownSubmit}>{size.size}(sold out online)</DropDownItem>
          } else {
            return <DropDownItem key={size.size} value={size.size} onClick={props.handleDropDownSubmit}>{size.size}</DropDownItem>
          }
        })}
      </DropDownList>
    </div>
  );
}

// class SizeDropDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: "test",
//     };
//   }

//   render() {
//     return (
//       <div className={this.props.className}>
//         <DropDownHeader selectedSize={this.props.selectedSize} toggleDropDown={this.props.toggleDropDown}/>
//         <DropDownList dropDownOpen={this.props.dropDownOpen}>
//           {this.props.sizes.map((size) => {
//             if (size.stock === 0) {
//               return <DropDownItem key={size.size} value={size.size} onClick={this.props.handleDropDownSubmit}>{size.size}(out of stock)</DropDownItem>
//             } else {
//               return <DropDownItem key={size.size} value={size.size} onClick={this.props.handleDropDownSubmit}>{size.size}</DropDownItem>
//             }
//           })}
//         </DropDownList>
//       </div>
//     );
//   }
// };

export default styled(SizeDropDown)`
  // border: 2px solid green;
  width: 100%;
`;

// export default SizeDropDown;
