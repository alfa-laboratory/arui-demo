import React from 'react';
import Usage from 'rsg-components/Usage';
import { createCn } from 'bem-react-classname';
import './index.css';

export default class extends React.Component {
    cn = createCn('docs-tab');
    render() {
        return (
            <div className={ this.cn() }>
                <Usage { ...this.props } />
            </div>
        );
    }
}
