import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class TableBodyRenderer extends PureComponent {
    cn = createCn('table-body');
    render() {
        return <tbody className={ this.cn() }>{ this.props.children }</tbody>;
    }
}

TableBodyRenderer.propTypes = {
    children: Type.node.isRequired
};

export default TableBodyRenderer;
