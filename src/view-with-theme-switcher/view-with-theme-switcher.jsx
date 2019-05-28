/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component } from 'react';
import Type from 'prop-types';
import ThemeProvider from 'arui-feather/theme-provider';
import cn from 'arui-feather/cn';

import { getParameterByName } from '../utils/url';

const LIGHT_THEME = 'alfa-on-white';
const DARK_THEME = 'alfa-on-color';
const THEMES = [LIGHT_THEME, DARK_THEME];

function hasValidUrlTheme() {
    const theme = getParameterByName('theme');

    return theme && THEMES.indexOf(theme) > -1;
}

@cn('view-with-theme-switcher')
class ViewWithThemeSwitcher extends Component {
    static propTypes = {
        children: Type.node
    };

    static childContextTypes = {
        theme: Type.string
    }

    state = {
        theme: LIGHT_THEME
    }

    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getChildContext() {
        return { theme: this.state.theme };
    }

    componentDidMount() {
        if (hasValidUrlTheme()) {
            this.setTheme(getParameterByName('theme'));
        }
    }

    componentDidUpdate() {
        const urlTheme = getParameterByName('theme');

        if (hasValidUrlTheme() && urlTheme !== this.state.theme) {
            this.setTheme(urlTheme);
        }
    }

    render(cn) {
        return (
            <ThemeProvider theme={ this.state.theme } >
                <div>
                    <div className={ cn('button-group') } >
                        {
                            !hasValidUrlTheme() &&
                            THEMES.map(theme => (
                                <button
                                    key={ theme }
                                    className={ cn('button', { theme, selected: theme === this.state.theme }) }
                                    onClick={ () => this.handleOnChange(theme) }
                                />
                            ))
                        }
                    </div>
                    <div className={ cn('layout', { theme: this.state.theme }) } >
                        <div className={ cn('wrapper') }>
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    handleOnChange(theme) {
        this.setState({ theme });
    }

    setTheme(theme) {
        this.setState({
            theme
        });
    }
}
export default ViewWithThemeSwitcher;
