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
      selectedColor: {colorName: 'Select Color', sizes: []},
    };
    this.selectColor = this.selectColor.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(1)
    this.getItemById(id);
  }

  getItemById(id) {
    $.ajax({
      url: `/api/itemSummary/${id}`,
      method: 'GET',
      success: (results) => {
        this.setState({item: JSON.parse(results)});
      },
      error: () => console.log(`error sending GET to /api/itemSummary/${id} from client`)
    })
  }

  selectColor(event) {
    var capitalizedColor = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    var parsedColors = JSON.parse(this.state.item[0].colors);
    var matchingColorObj = parsedColors.find(color => color.colorName === capitalizedColor);

    this.setState({ selectedColor: matchingColorObj });
  }

  render() {
    var item = this.state.item;
    return (
      <Main>
        <NameAndPrice
          name={item.length ? item[0].name : null}
          price={item.length ? item[0].price : null}
        />
        <Description
          description={item.length ? item[0].description : null}
        />
        <ColorSelector
          colors={item.length ? JSON.parse(item[0].colors) : []}
          selectColor={this.selectColor}
          selectedColor={this.state.selectedColor.colorName}
        />
        <SizeSelector
          sizes={item.length ? this.state.selectedColor.sizes : []}
        />
        <ShippingMock />
        <Accordion
          fabric={item.length ? JSON.parse(item[0].fabric) : 'test'}
          care={item.length ? item[0].care : []}
          features={item.length ? JSON.parse(item[0].features) : {}}
        />
      </Main>
    )
  }
};

export default ItemSummary;
