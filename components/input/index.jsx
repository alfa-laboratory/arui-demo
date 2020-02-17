import React from 'react';
import { withTheme } from 'arui-feather/cn';
import FeatherInput from 'arui-feather/input';

export class Input extends React.Component {
    render() {
        return (
            <FeatherInput view='filled' label='Инпут' />
        );
    }
}

export default withTheme(Input);
