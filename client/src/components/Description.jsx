import React from 'react';
import {DescriptionContainer, WhyWeMadeThis, ItemDescription} from '../styling.jsx';

const Description = (props) => {
  return (
    <DescriptionContainer>
      <WhyWeMadeThis>Why we made this </WhyWeMadeThis><br></br>
      <ItemDescription>{props.description}</ItemDescription>
    </DescriptionContainer>
  )
};

export default Description;
