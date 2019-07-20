import React from 'react';
import ColorButton from './ColorButton.jsx';
import styled from 'styled-components';

const ColorContainer = styled.div`
  background: rgb(250,250,250);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.5em;
  margin: 0px 0px 30px;
  border-top: 1px solid rgba(0, 0, 0, .3);
`;

const ColorButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RadioButtonLabel = styled.div`
  height: auto;
  width: auto;
  font-weight: 300;
  line-height: 1.25;
  margin-left: .3rem;
  margin-top: .5rem;
  font-weight: 200;
`;

const ColorSelector = (props) => {
  return (
    <ColorContainer className={props.className}>
      <ColorButtonContainer>
        {props.colors.map((color, index) => {
          return <ColorButton
          key={index}
          color={color.colorName}
          selectColor={props.selectColor}
          selectedColor={props.selectedColor}
          selectedSize={props.selectedSize}
          />
        })}
      </ColorButtonContainer>

      <RadioButtonLabel>
        {props.selectedColor.colorName}
      </RadioButtonLabel>

    </ ColorContainer>
  );
}

export default styled(ColorSelector)`
  display: flex;
  flex-direction: column;
  background: snow;
`;
