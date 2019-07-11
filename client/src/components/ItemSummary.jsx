import React from 'react';
import $ from 'jquery';
import NameAndPrice from './NameAndPrice.jsx';
import Description from './Description.jsx';

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
    this.getFirstItem = this.getFirstItem.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(1)
    this.getItemById(id);
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
        <NameAndPrice
          name={this.state.item.length ? this.state.item[0].name : null}
          price={this.state.item.length ? this.state.item[0].price : null}
        />
        <Description
          description={this.state.item.length ? this.state.item[0].description : null}
        />
      </div>
    )
  }
};

export default ItemSummary;
