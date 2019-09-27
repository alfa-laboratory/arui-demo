import React from 'react';
import Type from 'prop-types';
import TabItem from 'arui-feather/tab-item';

const DocsTabButton = (props) => {
    const component = props.props;
    const showButton = component.props || (component.methods && component.methods.length > 0);

    return showButton ? (
        <TabItem { ...props } checked={ props.active }>
            Свойства <span>и методы</span>
        </TabItem>
    ) : null;
};

DocsTabButton.propTypes = {
    onClick: Type.func.isRequired,
    name: Type.string.isRequired,
    props: Type.shape({
        props: Type.object,
        methods: Type.array
    }).isRequired,
    active: Type.bool
};

export default DocsTabButton;
