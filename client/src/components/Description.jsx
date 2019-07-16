import React from 'react';
import styled from 'styled-components';

const ItemDescription = styled.p`
  margin: 0px 0px 30px;
`;

const WhyWeMadeThis = styled.h2`
  font-size: 1rem;
  margin: 0px 0px 10px;
`;

const DescriptionContainer = styled.div`
  padding: 0.5em;
  background: rgb(250,250,250);
  margin: 0px;
`;

const Description = (props) => {
  return (
    <DescriptionContainer>
      <WhyWeMadeThis>Why we made this </WhyWeMadeThis><br></br>
      <ItemDescription>{props.description}</ItemDescription>
    </DescriptionContainer>
  )
};

export default Description;
