import React from 'react';

const ItemDescription = styled.p`
  margin: 0px 0px 30px;
`;

const WhyWeMadeThis = styled.h2`
  font-size: 1rem;
  margin: 0px 0px 10px;
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
