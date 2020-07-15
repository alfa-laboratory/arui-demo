import React from 'react';
import PropTypes from 'prop-types';
import RsgStyleGuide from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuide';
import { isPlayground, getPlayground } from '../playground/utils';

import 'arui-feather/main.css';

function StyleGuide(props) {
    let newProps = props;

    if (location.hash === '') { // eslint-disable-line no-restricted-globals
        if (props.sections[0].components && props.sections[0].components.length > 0) {
            window.location.hash = `/${props.sections[0].components[0].name}`;
        } else {
            window.location.hash = `/${props.sections[0].name}`;
        }

        return null;
    }

    if (isPlayground()) {
        newProps = {
            ...props,
            sections: getPlayground(props.sections)
        };
    }

    return (
        <RsgStyleGuide { ...newProps } />
    );
}

StyleGuide.propTypes = {
    sections: PropTypes.arrayOf({
        title: PropTypes.string,
        content: PropTypes.string,
        name: PropTypes.string,
        sectionDepth: PropTypes.number,
        ignore: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        external: PropTypes.bool,
        href: PropTypes.string,
        usageMode: PropTypes.string,
        exampleMode: PropTypes.string,
        components: PropTypes.arrayOf({
            name: PropTypes.string
        })
    })
};

export default StyleGuide;
