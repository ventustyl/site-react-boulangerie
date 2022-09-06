import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Toutes les viennoiseries a porter de main</h1>
      <p>Notre chef vous régale</p>
      <FeatureButton>Commander</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;