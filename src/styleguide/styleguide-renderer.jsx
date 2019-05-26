import React from 'react';
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';
import ViewWithThemeSwitcher from '../view-with-theme-switcher';

export default (props) => (
    <ViewWithThemeSwitcher>
        <StyleGuideRenderer { ...props } />
    </ViewWithThemeSwitcher>
)
