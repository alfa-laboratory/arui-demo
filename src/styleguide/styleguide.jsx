/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/forbid-prop-types: 0 */

import React from 'react';
//import ViewWithThemeSwitcher from '../view-with-theme-switcher';

import { isPlayground, getPlayground } from '../playground/utils';

import StyleGuide from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuide';

/* eslint import/first: 0 */
/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */

//import ViewWithThemeSwitcher from '../view-with-theme-switcher';

//import StyleGuide from 'rsg-components/StyleGuide/StyleGuide';


export default function (props) {

    let newProps = props;

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
