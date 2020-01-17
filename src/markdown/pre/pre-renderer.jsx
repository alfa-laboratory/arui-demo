import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

import './pre.css';

class PreRenderer extends PureComponent {
    cn = createCn('pre');
    render() {
        return <pre className={ this.cn() }>{ this.props.children }</pre>;
    }
}

PreRenderer.propTypes = {
    children: Type.node.isRequired
};

export default PreRenderer;
