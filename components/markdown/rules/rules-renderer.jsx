import { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'arui-feather/cn';

@cn('rules')
class Rules extends PureComponent {
    render(cn) {
        return <blockquote className={ cn() }>{ this.props.children }</blockquote>;
    }
}
Rules.propTypes = {
    children: Type.node.isRequired
};

export default Rules;
