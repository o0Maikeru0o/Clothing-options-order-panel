import styled from 'styled-components';

export const Main = styled.section`
  padding: 1em;
  background: papayawhip;
  max-width: 500px;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: row;
`;

// Component Containers

export const NamePriceContainer = styled.section`
  padding: 0.5em;
  background: white;
`;

export const DescriptionContainer = styled.section`
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
`;

export const ColorContainer = styled.section`
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
`;

export const AccordionContainer = styled.div`
  padding: 0.5em;
  background: white;
  margin: 0px 0px 30px;
`;

// NameAndPrice sub-containers

export const ItemName = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
`;

export const ItemPrice = styled.div`
  font-size: 5 rem;
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
