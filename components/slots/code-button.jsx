import React from 'react';
import Type from 'prop-types';

import IconButton from 'arui-feather/icon-button';

const CodeButton = props => <IconButton { ...props }>{ '<>' }</IconButton>;

CodeButton.propTypes = {
    active: Type.bool,
    name: Type.string.isRequired,
    onClick: Type.func.isRequired
};

export default CodeButton;
