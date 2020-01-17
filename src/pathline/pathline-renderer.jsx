/* eslint import/no-extraneous-dependencies: 0 */

import { Component } from 'react';
import Type from 'prop-types';
import copy from 'clipboard-copy';
import MdContentCopy from 'react-icons/lib/md/content-copy';

import IconButton from 'arui-feather/icon-button';

import { createCn } from 'bem-react-classname';

class PathlineRenderer extends Component {
    cn = createCn('pathline');
    render() {
        return (
            <div className={ this.cn() }>
                { this.props.children }
                <IconButton
                    size='s'
                    className={ this.cn('copy-button') }
                    title='Скопировать в буфер'
                    onClick={ () => copy(this.props.children) }
                >
                    <MdContentCopy />
                </IconButton>
            </div>
        );
    }
}

PathlineRenderer.propTypes = {
    children: Type.node
};

export default PathlineRenderer;
