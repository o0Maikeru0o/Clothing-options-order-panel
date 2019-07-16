import React from 'react';
import ColorButton from './ColorButton.jsx';
import styled from 'styled-components';

const ColorContainer = styled.div`
  background: rgb(250,250,250);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.5em;
  background: white;
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
        {props.colors.map((color) => {
          return <ColorButton
          key={color}
          color={color}
          selectColor={props.selectColor}
          selectedColor={props.selectedColor}
          />
        })}
      </ColorButtonContainer>

      <RadioButtonLabel>{props.selectedColor.charAt(0).toUpperCase() + props.selectedColor.slice(1)}</RadioButtonLabel>

    </ ColorContainer>
  );
}

export default styled(ColorSelector)`
  display: flex;
  flex-direction: column;
  background: snow;
`;
