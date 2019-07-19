import React from 'react';
import styled from 'styled-components';

const FabricContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FabricName = styled.div`
  font-size: 1.15rem;
  font-weight: bold;
  padding: 1rem;
`;

const FabricDescription = styled.p`
  margin: 0;
  padding: 1rem;
  // border-top: 1px solid rgba(0, 0, 0, .1);
`;

const FabricFeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, .1);
`;

const FabricFeature = styled.div`
  margin-right: 3rem;
  width: 50%
  // padding: 3rem;
`;

const CareList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  list-style: none;
`;

const CareItem = styled.li`
  margin: .5rem;
  width: 100%;
`;

const ItemFeaturesContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ItemFeature = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const ItemFeatureName = styled.div`
  margin-right: 30%;
`;

const ItemFeatureDescription = styled.div`

`;

const placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const placeholderFeatures = 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

const AccordionTabContent = (props) => {
  //render different layout based on Tab Title

  if (props.tabTitle === 'Fabric') {
    return (
      <FabricContentContainer>
        <FabricName>{props.tabContent}</FabricName>
        <FabricDescription>{props.fabric.fabricDescription}</FabricDescription>
        <FabricFeaturesContainer>
          {props.fabric.fabricFeatures.map((feature, index) => {
            return <FabricFeature key={index}>{feature}</FabricFeature>
          })}
        </FabricFeaturesContainer>
      </FabricContentContainer>
    );

  } else if (props.tabTitle === 'Care') {
    return (
      //Array of care instructions
      //dynamically render each item as a component
      <CareList care={props.care}>
        {JSON.parse(props.care).map((item, index) => {
          return <CareItem key={index}>{item}</CareItem>
        })}
        <CareItem> (╯°□°)╯︵ ┻━┻</CareItem>
      </CareList>
    )
  } else if (props.tabTitle === 'Features'){
    return (
      //designedFor               -->     office/travel/commute
      //Fabric                    -->     description (fabric)
      //Fit (relaxed, hip length) -->     description (fit)
      <ItemFeaturesContainer>
        <ItemFeature>
          <ItemFeatureName>Designed For</ItemFeatureName>
          {props.features.designedFor[0]}
        </ItemFeature>
        <ItemFeature>
          <ItemFeatureName>
            {props.features.fit.join(', ').toUpperCase()}
          {/* {props.features.fit.map((fit) => {
            return fit
          })} */}
          </ItemFeatureName>
        </ItemFeature>
      </ItemFeaturesContainer>
    )
  }

};

export default AccordionTabContent;
