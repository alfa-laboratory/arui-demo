import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class TableHeadRenderer extends PureComponent {
    cn = createCn('table-head');
    render() {
        return <tbody className={ this.cn() }>{ this.props.children }</tbody>;
    }
}

TableHeadRenderer.propTypes = {
    children: Type.node.isRequired
};

export default TableHeadRenderer;
