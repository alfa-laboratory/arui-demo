/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component } from 'react';
import Type from 'prop-types';
import ThemeProvider from 'arui-feather/theme-provider';
import { createCn } from 'bem-react-classname';

import { getParameterByName } from '../utils/url';

const WHITE_THEME = 'alfa-on-white';
const COLOR_THEME = 'alfa-on-color';
const LIGHT_THEME = 'alfa-light';
const DARK_THEME = 'alfa-dark';
const THEMES = [WHITE_THEME, COLOR_THEME, LIGHT_THEME, DARK_THEME];

function hasValidUrlTheme() {
    const theme = getParameterByName('theme');

    return theme && THEMES.indexOf(theme) > -1;
}

class ViewWithThemeSwitcher extends Component {
    static propTypes = {
        children: Type.node
    };

    static childContextTypes = {
        theme: Type.string
    }

    state = {
        theme: WHITE_THEME
    }

    cn = createCn('view-with-theme-switcher');

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        return (
            <ThemeProvider theme={ this.state.theme } >
                <div className={ this.cn() }>
                    <div className={ this.cn('button-group') } >
                        <select onChange={ this.handleChange } className={ this.cn('theme-select') }>
                            {
                                !hasValidUrlTheme() &&
                            THEMES.map(theme => (
                                <option key={ theme } value={ theme }>{ theme }</option>
                            ))
                            }
                        </select>
                    </div>
                    <div className={ this.cn('layout', { theme: this.state.theme }) } >
                        <div className={ this.cn('wrapper') }>
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    handleChange(e) {
        this.setState({ theme: e.target.value });
    }

    setTheme(theme) {
        this.setState({
            theme
        });
    }
}
export default ViewWithThemeSwitcher;
