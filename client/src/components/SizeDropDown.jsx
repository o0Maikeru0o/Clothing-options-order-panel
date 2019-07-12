import React from 'react';

class SizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
    };
  }

  render() {
    if (this.state.dropDownOpen) {
      return (
        <div>DropDown Opened!</div>
      );
    } else {
      return (
        <div>DropDown Closed</div>
      );
    }
  }
};

// const SizeDropDown = (props) => {
//   return (
//     <select value={'Select a size'}>
//       {props.sizes.map((size) => {
//         return <option value={size}>{size}</option>
//       })}
//     </select>
//   );
// };

export default SizeDropDown;
