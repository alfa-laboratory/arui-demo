/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'arui-feather/cn';
import Examples from 'rsg-components/Examples';

import '../examples.css';

@cn('examples')
export default class extends React.Component {
    static propTypes = {
        props: {
            rules: PropTypes.array
        }
    };

    render(cn) {
        const { props } = this.props;
        const { rules } = props;

        return (
            rules.length > 0 ? (
                <div className={ cn() }>
                    <Examples examples={ rules } name={ props.displayName } />
                </div>
            ) : (
                null
            )
        );

    }
}
