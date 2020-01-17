import { PureComponent } from 'react';
import Type from 'prop-types';

import { createCn } from 'bem-react-classname';

class Rules extends PureComponent {
    cn = createCn('rules');
    render() {
        return <blockquote className={ this.cn() }>{ this.props.children }</blockquote>;
    }
}
Rules.propTypes = {
    children: Type.node.isRequired
};

export default Rules;
