import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  padding: .055rem;
  border: ${(props) => {
    return props.color === props.selectedColor.colorName ? '1.3px solid black' : '';
  }};

  background-image: ${(props) => {
    if (props.selectedColor.sizes.length) {
      let checkStock = (colorObj, size) => {
        return colorObj.sizes.filter((sizeObj) => {return sizeObj.size == size})[0].stock;
      };

      if (props.color === props.selectedColor.colorName) {
        if (checkStock(props.selectedColor, props.selectedSize) === 0) {
          return 'repeating-linear-gradient(150deg, transparent 0%, transparent 48%, black 50%, transparent 52%, transparent 100%)';
        } else {
          return 'none';
        }
      }
    } else {
      return 'none';
    }
  }};
`;

const GreyedOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px
  padding: .055rem;
  border: ${(props) => {
    return props.color === props.selectedColor.colorName ? '1.3px solid black' : '';
  }};
  background-image: ${(props) => {
    return 'repeating-linear-gradient(150deg, transparent 0%, transparent 48%, black 50%, transparent 52%, transparent 100%)'
  }};
`;

const RadioButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 2px;

  :hover {
    cursor: pointer;
  }
`;

const GreyedOutButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 2px;
  opacity: 0.5;
`;

const RadioButtonLabel = styled.div`
  height: auto;
  width: auto;
  font-weight: 300;
  line-height: 1.25;
  margin: 0 auto 1rem;
`;

const ColorButton = (props) => {

  let checkStock = (colorObj, size) => {
    return colorObj.sizes.filter((sizeObj) => { return sizeObj.size == size })[0].stock;
  };
  const findObjByColorName = (array, color) => {
    return array.filter((colorObj) => { return colorObj.colorName === color})
  }
  const relatedObj = findObjByColorName(props.colors, props.color)[0];
  const selectedSize = props.selectedSize

  if (checkStock(relatedObj, props.selectedSize) === 0) {
    return (
      <GreyedOutContainer selectedSize={props.selectedSize} selectedColor={props.selectedColor} color={props.color}>
        <GreyedOutButton
        colors={props.colors}
        color={props.color}
        value={props.color.toLowerCase()}
        onClick={props.selectColor}
        selectedColor={props.selectedColor}
        selectedSize={props.selectedSize}
        />
      </GreyedOutContainer>
    );
  } else {
    return (
      <RadioButtonContainer selectedSize={props.selectedSize} selectedColor={props.selectedColor} color={props.color}>
        <RadioButton
        colors={props.colors}
        color={props.color}
        value={props.color.toLowerCase()}
        onClick={props.selectColor}
        selectedColor={props.selectedColor}
        selectedSize={props.selectedSize}
        />
      </RadioButtonContainer>
    );
  }
};

export default ColorButton;
