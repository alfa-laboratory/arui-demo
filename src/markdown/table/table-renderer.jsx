import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class TableRenderer extends PureComponent {
    cn = createCn('table');
    render() {
        return <table className={ this.cn() }>{ this.props.children }</table>;
    }
}

TableRenderer.propTypes = {
    children: Type.node.isRequired
};

export default TableRenderer;
