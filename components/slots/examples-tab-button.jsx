/* eslint-disable react/no-danger */

import React from 'react';
import Type from 'prop-types';

import TabItem from 'arui-feather/tab-item';

const ExamplesTabButton = (props) => {
    const component = props.props;
    const showButton = component && component.usages && component.usages.length > 0;

    return showButton ?
        <TabItem { ...props } checked={ props.active }>
            Примеры <span>и код</span>
        </TabItem>
        : null;
};

ExamplesTabButton.propTypes = {
    onClick: Type.func.isRequired,
    name: Type.string.isRequired,
    props: Type.shape({
        props: Type.array,
        methods: Type.array
    }).isRequired,
    active: Type.bool,
    children: Type.node
};

export default ExamplesTabButton;
