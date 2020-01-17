/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import Type from 'prop-types';
import { createCn } from 'bem-react-classname';
import Examples from 'rsg-components/Examples/Examples';

import './examples.css';

const ExamplePlaceholder = process.env.STYLEGUIDIST_ENV === 'production'
    ? () => <div />
    : require('react-styleguidist/lib/client/rsg-components/ExamplePlaceholder').default;

export default class extends React.Component {
    static propTypes = {
        usages: Type.array,
        examples: Type.array,
        displayName: Type.string,
        props: Type.object
    };

    cn = createCn('examples');

    render() {
        const { props } = this.props;
        const { usages } = props;

        return (
            usages.length > 0 ? (
                <div className={ this.cn() }>
                    <Examples
                        exampleMode='expand'
                        examples={ usages }
                        name={ props.displayName }
                    />
                </div>
            ) : (
                <ExamplePlaceholder name={ props.displayName } />
            )
        );
    }
}
