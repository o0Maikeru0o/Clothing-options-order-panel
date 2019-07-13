import styled from 'styled-components';

export const Main = styled.section`
  padding: 1em;
  background: rgb(250,250,250);
  max-width: 500px;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: row;
`;

// Component Containers

export const NamePriceContainer = styled.div`
  padding: 0.5em;
  background: white;
  background: rgb(250,250,250)
`;

export const DescriptionContainer = styled.div`
  padding: 0.5em;
  background: rgb(250,250,250);
  margin: 0px;
`;

export const ColorContainer = styled.div`
  background: rgb(250,250,250);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
  border-top: 1px solid rgba(0, 0, 0, .3);
`;

export const SizeContainer = styled.div`
  height: 40px;
  display: flex;
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.5);
`;

export const AccordionContainer = styled.div`
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
`;

// DropDown components
export const DropDownList = styled.ul`
  display: flex;
  z-index: 1;
  flex-direction: column;
  padding: 0;
  margin: 5px;
  position: relative;
  visibility: ${(props) => {
    return props.dropDownOpen ? 'visible' : 'hidden';
  }}
`;

export const DropDownItem = styled.li`
  display: block;
  z-index: 2;
  transition-duration: 0.2s;
  height: 40px;
  width: 100%;
  padding: 0.5em;
  background: white;
  text-align: center;
  box-shadow: box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.5);
`;

// NameAndPrice sub-containers

export const ItemName = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
`;

export const ItemPrice = styled.div`
  font-size: 7 rem;
  display: flex;
  margin: 0px 0px 45px;
`;

// Description sub-containers

export const ItemDescription = styled.p`
  margin: 0px 0px 30px;
`;

export const WhyWeMadeThis = styled.h2`
  font-size: 1rem;
  margin: 0px 0px 10px;
`;


// Color Picker Buttons
export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px;
`;

export const RadioButton = styled.button`
  background: ${props => props.value};
  height: 1.5rem;
  width: 3rem;
  margin: 5px;
`;

export const RadioButtonLabel = styled.div`
  height: auto;
  width: auto;
  font-weight: 300;
  line-height: 1.25;
  margin: 0 auto 1rem;
`;
