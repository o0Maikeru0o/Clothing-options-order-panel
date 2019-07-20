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

const RadioButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 2px;

  opacity: ${(props) => {
    if (props.selectedColor.sizes.length) {
      let checkStock = (colorObj, size) => {
        return colorObj.sizes.filter((sizeObj) => {return sizeObj.size == size})[0].stock;
      };
      let capitalizedColor = props.value.charAt(0).toUpperCase() + props.value.slice(1);

      if (capitalizedColor === props.selectedColor.colorName) {
        if (checkStock(props.selectedColor, props.selectedSize) === 0) {
          return '0.5';
        } else {
          return '1';
        }
      }
    } else {
      return '1';
    }
  }};

  :hover {
    cursor: pointer;
  }
`;

const RadioButtonLabel = styled.div`
  height: auto;
  width: auto;
  font-weight: 300;
  line-height: 1.25;
  margin: 0 auto 1rem;
`;

const ColorButton = (props) => {
  return (
    <RadioButtonContainer selectedSize={props.selectedSize} selectedColor={props.selectedColor} color={props.color}>
      <RadioButton
      color={props.color}
      value={props.color.toLowerCase()}
      onClick={props.selectColor}
      selectedColor={props.selectedColor}
      selectedSize={props.selectedSize}
      />
    </RadioButtonContainer>
  );
};

export default ColorButton;
