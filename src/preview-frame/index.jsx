/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import Type from 'prop-types';
import Frame, { FrameContextConsumer } from 'react-frame-component';

import cn from 'arui-feather/cn';

import './index.css';

@cn('preview-frame')
export default class PreviewFrame extends Component {
    static propTypes = {
        children: Type.node,
        height: Type.oneOfType(Type.number, Type.string),
        width: Type.oneOfType(Type.number, Type.string)
    };

    static defaultProps = {
        width: '100%'
    };

    iframe;
    contentDocument;

    render(cn) {
        const styleLinks = Array.from(document.querySelectorAll('link[type="text/css"]'));
        const appStyles = Array.from(document.querySelectorAll('style'))
            .map(style => style.innerText)
            .join('\n');
        const styles = `
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

            .frame-content .page {
                height: auto;
                min-height: 100vh;
            }
        ${appStyles}`;

        let height = 0;

        if (this.contentDocument) {
            height = `${this.contentDocument.body.scrollHeight}px`;
        }

        const iframeProps = {
            ...this.props,
            style: { height: this.props.height || height, width: this.props.width }
        };

        // Прокинуть children отдельно разметкой, иначе в консоли присутствует Warning
        const { children, ...restIframeProps } = iframeProps;

        return (
            <div className={ cn() }>
                <Frame { ...restIframeProps } mountTarget='.frame-root'>
                    <FrameContextConsumer>
                        { ({ document }) => {
                            this.handleContentDidMount(document);

                            return (
                                <div>
                                    { styleLinks.map(({ href }) => (
                                        <link key={ href } href={ href } type='text/css' rel='stylesheet' />
                                    )) }
                                    <style dangerouslySetInnerHTML={ { __html: styles } } />
                                    { children }
                                </div>
                            );
                        } }
                    </FrameContextConsumer>
                </Frame>
            </div>
        );
    }

    @autobind
    handleContentDidMount(document) {
        if (this.contentDocument === document) {
            return;
        }

        this.contentDocument = document;
        setTimeout(() => {
            this.forceUpdate();
        }, 64);
    }
}

if (typeof window === 'object') {
    window.PreviewFrame = PreviewFrame;
}
