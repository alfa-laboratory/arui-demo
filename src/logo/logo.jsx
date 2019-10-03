/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React from 'react';
import Type from 'prop-types';
import cn from 'arui-feather/cn';

@cn('styleguide')
class Logo extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <a className={ cn('logo') } href='https://github.com/alfa-laboratory/arui-feather'>
                    <span className={ cn('name') }>{ this.props.children }</span>
                </a>
            </div>
        );
    }
}

Logo.propTypes = {
    children: Type.node
};

export default Logo;
