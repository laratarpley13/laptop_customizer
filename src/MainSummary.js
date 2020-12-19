import React from 'react';
import Option from './Option';
import Total from './Total.js';

export default function MainSummary(props) {

    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = props.selected[feature];

        return (
            <Option
              featureHash={featureHash}
              selectedOption={selectedOption}
              feature={feature}
              USCurrencyFormat={props.USCurrencyFormat}
            />
        );
    });

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total
                selected={props.selected}
                USCurrencyFormat={props.USCurrencyFormat}
            />
        </section>
    )
}