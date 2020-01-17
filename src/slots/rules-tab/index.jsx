/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { createCn } from 'bem-react-classname';
import Examples from 'rsg-components/Examples';

import '../examples.css';

export default class extends React.Component {
    static propTypes = {
        props: {
            rules: PropTypes.array
        }
    };

    cn = createCn('examples');

    render() {
        const { props } = this.props;
        const { rules } = props;

        return (
            rules.length > 0 ? (
                <div className={ this.cn() }>
                    <Examples examples={ rules } name={ props.displayName } />
                </div>
            ) : (
                null
            )
        );

    }
}
