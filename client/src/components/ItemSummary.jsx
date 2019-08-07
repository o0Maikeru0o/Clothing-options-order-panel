import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NameAndPrice from './NameAndPrice.jsx';
import Description from './Description.jsx';
import ColorSelector from './ColorSelector.jsx';
import Accordion from './Accordions.jsx';
import SizeSelector from './SizeSelector.jsx';
import ShippingMock from './ShippingMock.jsx';
import { Main } from '../styling.jsx';

const id = window.location.pathname;

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      selectedColor: { colorName: 'Select Color', sizes: [] },
      selectedSize: '0',
      dropDownOpen: false,
    };
    this.selectColor = this.selectColor.bind(this);
    this.handleDropDownSubmit = this.handleDropDownSubmit.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  componentDidMount() {
    this.getItemById();
  }

  getItemById() {
    axios.get(`/api/itemSummary${id}`)
      .then((results) => {
        this.setState({ item: [results.data] });
      })
      .catch(err => console.log(err));
  }

  selectColor(event) {
    const capitalizedColor = event.target.value.charAt(0).toUpperCase()
    + event.target.value.slice(1);
    const matchingColorObj = this.state.item[0].colors.find(
      color => color.colorName === capitalizedColor,
    );
    this.setState({ selectedColor: matchingColorObj });
  }

  handleDropDownSubmit(event) {
    this.setState({
      selectedSize: event.target.value,
      dropDownOpen: false,
    });
    console.log(this.state.selectedColor);
  }

  toggleDropDown() {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  }

  render() {
    const { item } = this.state;

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
          colors={item.length ? item[0].colors : []}
          selectColor={this.selectColor}
          selectedColor={this.state.selectedColor}
          selectedSize={this.state.selectedSize}
        />
        <SizeSelector
          sizes={item.length ? this.state.selectedColor.sizes : []}
          selectedSize={this.state.selectedSize}
          selectedColor={this.state.selectedColor}
          handleDropDownSubmit={this.handleDropDownSubmit}
          toggleDropDown={this.toggleDropDown}
          dropDownOpen={this.state.dropDownOpen}
        />
        <ShippingMock />
        <Accordion
          fabric={item.length ? item[0].fabric : 'test'}
          care={item.length ? item[0].care : []}
          features={item.length ? item[0].features : {}}
        />
      </Main>
    );
  }
}

export default ItemSummary;
