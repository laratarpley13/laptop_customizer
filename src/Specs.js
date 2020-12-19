import React from 'react';
import slugify from 'slugify';
import Parts from './Parts.js';

export default function Specs(props) {
  const options = props.features[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <Parts
        itemHash={itemHash}
        item={item}
        feature={props.feature}
        updateFeature={props.updateFeature}
        USCurrencyFormat={props.USCurrencyFormat}
        selected={props.selected}
      />
    );
  });

  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}