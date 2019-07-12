import React from 'react';
import {DescriptionContainer} from '../styling.jsx';

const Description = (props) => {
  return (
    <DescriptionContainer>
      Why we made this:
      {props.description}
    </DescriptionContainer>
  )
};

export default Description;
