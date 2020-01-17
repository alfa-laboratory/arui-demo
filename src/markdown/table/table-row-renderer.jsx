import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class TableRowRenderer extends PureComponent {
    cn = createCn('table-row');
    render() {
        return <tr className={ this.cn() }>{ this.props.children }</tr>;
    }
}

TableRowRenderer.propTypes = {
    children: Type.node.isRequired
};

export default TableRowRenderer;
