import React from 'react';
import Type from 'prop-types';

import IconButton from 'arui-feather/icon-button';

const CodeTabButton = props => <IconButton { ...props }>{ '<>' }</IconButton>;

CodeTabButton.propTypes = {
    active: Type.bool,
    name: Type.string.isRequired,
    onClick: Type.func.isRequired
};

export default CodeTabButton;
