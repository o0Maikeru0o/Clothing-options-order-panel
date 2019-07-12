import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import NameAndPrice from './NameAndPrice.jsx';
import Description from './Description.jsx';
import ColorSelector from './ColorSelector.jsx';
import Accordions from './Accordions.jsx';
import SizeSelector from './SizeSelector.jsx';
import {Main} from '../styling.jsx';

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
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

  render() {
    return (
      <Main>
        <NameAndPrice
          name={this.state.item.length ? this.state.item[0].name : null}
          price={this.state.item.length ? this.state.item[0].price : null}
        />
        <Description
          description={this.state.item.length ? this.state.item[0].description : null}
        />
        <ColorSelector
          colors={this.state.item.length ? JSON.parse(this.state.item[0].colors) : []}/>
        <SizeSelector />
        <Accordions />
      </Main>
    )
  }
};

export default ItemSummary;
