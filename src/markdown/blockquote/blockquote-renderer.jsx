import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class BlockquoteRenderer extends PureComponent {
    cn = createCn('blockquote');
    render() {
        return <blockquote className={ this.cn() }>{ this.props.children }</blockquote>;
    }
}
BlockquoteRenderer.propTypes = {
    children: Type.node.isRequired
};

export default BlockquoteRenderer;
