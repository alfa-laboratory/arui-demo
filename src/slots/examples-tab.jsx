/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/forbid-prop-types: 0 */

import Type from 'prop-types';
import cn from 'arui-feather/cn';
import Examples from 'rsg-components/Examples/Examples';

const ExamplePlaceholder = process.env.STYLEGUIDIST_ENV === 'production'
    ? () => <div />
    : require('react-styleguidist/lib/client/rsg-components/ExamplePlaceholder').default;

import './examples.css';

@cn('examples')
export default class extends React.Component {
    static propTypes = {
        usages: Type.array,
        examples: Type.array,
        displayName: Type.string
    };

    render(cn) {
        const { props } = this.props;
        const { usages } = props;

        return (
            usages.length > 0 ? (
                <div className={ cn() }>
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
