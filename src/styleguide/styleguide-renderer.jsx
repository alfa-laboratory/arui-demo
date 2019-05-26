import { Component } from 'react';
import Type from 'prop-types';

import cn from 'arui-feather/cn';

import Logo from '../logo';

import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';
import ViewWithThemeSwitcher from '../view-with-theme-switcher';
import { isPlayground } from '../playground/utils';
import './styleguide.css';
@cn('styleguide')
class Hoba extends Component {
    render(cn) {
        console.log(this.props);
        return (

                <div className={ cn({ 'has-sidebar': this.props.hasSidebar }) }>
                <main className={ cn('content') }>
                    <div className={ cn('inner') }>
                        { this.props.children }
                    </div>
                </main>
                {
                    this.props.hasSidebar &&
                    <div className={ cn('sidebar') }>
                        <div>
                            <Logo>{ this.props.title }</Logo>
                        </div>
                        { this.props.toc }
                    </div>
                }
            </div>

        );
    }
}

Hoba.propTypes = {
    title: Type.string.isRequired,
    homepageUrl: Type.string.isRequired,
    children: Type.node.isRequired,
    toc: Type.node.isRequired,
    hasSidebar: Type.bool
};

export default (props) => (
    <ViewWithThemeSwitcher>
        <Hoba { ...props } />
    </ViewWithThemeSwitcher>
)
