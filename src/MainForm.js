import React from 'react';
import Specs from './Specs';

export default function MainForm(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;    
    return (
      <Specs
        selected={props.selected}
        features={props.features} 
        featureHash={featureHash}
        feature={feature}
        updateFeature={props.updateFeature}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    )
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}