import React from 'react';
import StyleGuide from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuide';
import { isPlayground, getPlayground } from '../playground/utils';

export default function (props) {
    let newProps = props;

    if (location.hash === '') {
        window.location.hash = `/${props.sections[0].components[0].name}`;
        return null;
    }

    if (isPlayground()) {
        newProps = {
            ...props,
            sections: getPlayground(props.sections)
        }
    }

    return (
        <StyleGuide { ...newProps } />
    );
}
