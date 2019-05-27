/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/forbid-prop-types: 0 */

import Type from 'prop-types';

import Examples from 'rsg-components/Examples/Examples';

const ExamplePlaceholder = process.env.STYLEGUIDIST_ENV !== 'production'
    ? require('react-styleguidist/lib/client/rsg-components/ExamplePlaceholder').default
    : () => <div />;

function ExamplesTab(component) {
    const { props } = component;
    const { usages } = props;

    return (
        usages.length > 0 ? (
            <Examples
                exampleMode='expand'
                examples={ usages }
                name={ props.displayName }
            />
        ) : (
            <ExamplePlaceholder name={ props.displayName } />
        )
    );
}

ExamplesTab.propTypes = {
    examples: Type.array,
    displayName: Type.string
};

export default ExamplesTab;
