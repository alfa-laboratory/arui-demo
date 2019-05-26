/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint react/no-danger: 0 */
import { Component } from 'react';
import Type from 'prop-types';
import Frame from 'react-frame-component';

import cn from 'arui-feather/cn';

import './index.css';

@cn('preview-frame')
export default class PreviewFrame extends Component {
    static propTypes = {
        children: Type.node,
        height: Type.number,
        width: Type.oneOfType(Type.number, Type.string)
    };

    static defaultProps = {
        width: '100%'
    }

    iframe;
    contentDocument;

    componentDidMount() {
        this.contentDocument = this.iframe.getDoc();
        setTimeout(() => {
            this.forceUpdate();
        }, 0);
    }

    render(cn) {
        let styleLinks = Array.from(document.querySelectorAll('link[type="text/css"]'));
        let appStyles = Array.from(document.querySelectorAll('style')).map(style => style.innerText).join('\n');
        let styles = `
            html { height: 100%; width: 100%; }

            body {
                height: 100%;
                background: none !important;
                margin: 0;
            }

            .frame-root {
                height: 100%;
            }

            .frame-content {
                height: 100%;
            }
        ${appStyles}`;

        let height = 0;

        if (this.contentDocument) {
            height = `${this.contentDocument.body.scrollHeight}px`;
        }

        let iframeProps = {
            ...this.props,
            style: { height: this.props.height || height, width: this.props.width }
        };

        return (
            <div className={ cn() } >
                <Frame { ...iframeProps } ref={ (node) => { this.iframe = node; } } >
                    { styleLinks.map(({ href }) => (
                        <link key={ href } href={ href } type='text/css' rel='stylesheet' />
                    )) }
                    <style dangerouslySetInnerHTML={ { __html: styles } } />
                    { this.props.children }
                </Frame>
            </div>
        );
    }
}

if (typeof window === 'object') {
    window.PreviewFrame = PreviewFrame;
}
