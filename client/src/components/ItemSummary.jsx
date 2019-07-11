import React from 'react';
import $ from 'jquery';

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
    this.getFirstItem = this.getFirstItem.bind(this);
  }

  componentDidMount() {
    this.getItemById(1);
  }

  getItemById(id) {
    $.ajax({
      url: `http://localhost:3002/api/${id}`,
      method: 'GET',
      success: (results) => {
        this.setState({item: JSON.parse(results)});
      },
      error: () => console.log(`error sending GET to /api/${id} from client`)
    })
  }

  getFirstItem() {
    $.ajax({
      url: 'http://localhost:3002/api/1',
      method: 'GET',
      success: (results) => {
        this.setState({item: JSON.parse(results)});
      },
      error: () => console.log('error sending GET to /api/1 from client')
    })
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