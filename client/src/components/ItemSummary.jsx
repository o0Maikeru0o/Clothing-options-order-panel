import React from 'react';

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  getSingleItem() {

  }

  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default ItemSummary;