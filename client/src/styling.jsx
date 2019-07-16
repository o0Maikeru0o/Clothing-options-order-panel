import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: rgb(250,250,250);
  max-width: 500px;
  font-family: Arial, Helvetica, sans-serif;
`;

// ///////// Component Containers ///////////////////

export const DescriptionContainer = styled.div`
  padding: 0.5em;
  background: rgb(250,250,250);
  margin: 0px;
`;

export const SizeContainer = styled.div`
  height: 40px;
  display: flex;
  padding: 0;
  background: white;
  margin: 0px 0px 30px;
  border: 1px solid rgba(0, 0, 0, .1);
`;

// ///////// DropDown components ///////////////////////

export const DropDownList = styled.ul`
  display: flex;
  z-index: 1;
  flex-direction: column;
  padding: 0;
  margin: 0px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, .1);
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
  padding-top: 1em;
  background: white;
  text-align: center;

  :hover {
    cursor: pointer;
    background: rgba(250, 250, 250, 1);
  }
`;

export const DropDownLabel = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

export const SelectedSize = styled.div`
  margin-left: 69%;
  margin-top: 8px;
`;

