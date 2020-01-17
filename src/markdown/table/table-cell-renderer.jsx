import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class TableCellRenderer extends PureComponent {
    cn = createCn('table-cell');
    render() {
        if (this.props.header) {
            return <th className={ this.cn() }>{ this.props.children }</th>;
        }

        return <td className={ this.cn() }>{ this.props.children }</td>;
    }
}

TableCellRenderer.propTypes = {
    children: Type.node.isRequired,
    header: Type.bool
};

export default TableCellRenderer;
