import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NameAndPrice from './NameAndPrice.jsx';
import Description from './Description.jsx';
import ColorSelector from './ColorSelector.jsx';
import Accordion from './Accordions.jsx';
import SizeSelector from './SizeSelector.jsx';
import ShippingMock from './ShippingMock.jsx';
import {Main} from '../styling.jsx';

const id = window.location.pathname;

class ItemSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      selectedColor: {colorName: 'Select Color', sizes: []},
      selectedSize: '0',
      dropDownOpen: false,
    };
    this.selectColor = this.selectColor.bind(this);
    this.handleDropDownSubmit = this.handleDropDownSubmit.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  componentDidMount() {
    this.getItemById(id);
  }

  async getItemById() {
    await axios.get(`/api/itemSummary/id${id}`)
      .then((results) => {
        console.log('results', results);
        this.setState({ item: results.data }, console.log('current state', this.state));
      })
      .catch(err => console.log(err));
    // $.ajax({
    //   url: `/api/itemSummary/${id}`,
    //   method: 'GET',
    //   success: (results) => {
    //     this.setState({item: JSON.parse(results)});
    //   },
    //   error: () => console.log(`error sending GET to /api/itemSummary/${id} from client`)
    // })
  }

  selectColor(event) {
    var capitalizedColor = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    var parsedColors = this.state.item[0].colors;
    var matchingColorObj = parsedColors.find(color => color.colorName === capitalizedColor);

    this.setState({ selectedColor: matchingColorObj });
  }

  handleDropDownSubmit(event) {
    this.setState({
      selectedSize: event.target.value,
      dropDownOpen: false,
    })
    console.log(this.state.selectedColor)
  }

  toggleDropDown() {
    this.setState({ dropDownOpen: !this.state.dropDownOpen})
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
    )
  }
};

export default ItemSummary;
