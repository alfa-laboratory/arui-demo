import { PureComponent } from 'react';

import { createCn } from 'bem-react-classname';

class HrRenderer extends PureComponent {
    cn = createCn('hr');
    render() {
        return <hr className={ this.cn() } />;
    }
}

export default HrRenderer;
