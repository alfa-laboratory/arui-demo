/* eslint import/first: 0 */
/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
import 'arui-feather/polyfills';
import 'arui-feather/main.css';

import ViewWithThemeSwitcher from '../view-with-theme-switcher';

import StyleGuide from 'rsg-components/StyleGuide/StyleGuide';

import './styleguide.css';

export default function (props) {
    return (
        <ViewWithThemeSwitcher>
            <StyleGuide { ...props } />
        </ViewWithThemeSwitcher>
    );
}
