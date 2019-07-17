import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import NameAndPrice from './NameAndPrice.jsx';
import Description from './Description.jsx';
import ColorSelector from './ColorSelector.jsx';
import Accordion from './Accordions.jsx';
import SizeSelector from './SizeSelector.jsx';
import ShippingMock from './ShippingMock.jsx';
import {Main} from '../styling.jsx';

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      selectedColor: 'select a color',
    };
    this.selectColor = this.selectColor.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(1)
    this.getItemById(id);
  }

  getItemById(id) {
    $.ajax({
      url: `/api/${id}`,
      method: 'GET',
      success: (results) => {
        this.setState({item: JSON.parse(results)});
      },
      error: () => console.log(`error sending GET to /api/${id} from client`)
    })
  }

  selectColor(event) {
    console.log(event.target.value);
    this.setState({ selectedColor: event.target.value })
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
          colors={this.state.item.length ? JSON.parse(this.state.item[0].colors) : []}
          selectColor={this.selectColor}
          selectedColor={this.state.selectedColor}
        />
        <SizeSelector
          sizes={this.state.item.length ? JSON.parse(this.state.item[0].sizes) : []}
        />
        <ShippingMock />
        <Accordion
          fit={this.state.item.length ? this.state.item[0].fit : null}
          fabric={this.state.item.length ? this.state.item[0].fabric : 'test'}
          care={this.state.item.length ? this.state.item[0].care : []}
          designedFor={this.state.item.length ? this.state.item[0].designed_for : null}
        />
      </Main>
    )
  }
};

export default ItemSummary;
