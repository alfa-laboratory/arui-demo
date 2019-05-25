import React from 'react';
import Usage from 'rsg-components/Usage';
import cn from 'arui-feather/cn';
import './index.css';

@cn('docs-tab')
export default class extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Usage { ...this.props } />
            </div>
        )
    }
}
