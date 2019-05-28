import React from 'react';
import PropTypes from 'prop-types';
import RsgStyleGuide from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuide';
import { isPlayground, getPlayground } from '../playground/utils';

function StyleGuide(props) {
    let newProps = props;

    if (location.hash === '') { // eslint-disable-line no-restricted-globals
        window.location.hash = `/${props.sections[0].components[0].name}`;

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
        components: PropTypes.arrayOf({
            name: PropTypes.string
        })
    })
};

export default StyleGuide;
