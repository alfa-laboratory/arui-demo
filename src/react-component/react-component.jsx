import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createCn } from 'bem-react-classname';
import ReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent';

import './react-component.css';

export default class extends Component {
    static propTypes = {
        component: {
            props: {
                examples: PropTypes.array
            }
        }
    };

    cn = createCn('react-component');

    componentDidMount() {
        this.reactComponent.handleTabChange('examples-view');
    }

    render() {
        const examples = [];
        const { component } = this.props;
        const RULES_PLACEHOLDER = /===RULES===/g;
        const rules = component.props.examples.reduce((acc, item) => {
            if (item.type === 'markdown' && RULES_PLACEHOLDER.test(item.content)) {
                acc.push({ ...item, content: item.content.replace(RULES_PLACEHOLDER, '') });
            } else {
                examples.push(item);
            }

            return acc;
        }, []);

        const modifiedProps = {
            ...this.props,
            component: {
                ...component,
                props: {
                    ...component.props,
                    examples: [],
                    usages: examples,
                    rules
                }
            }
        };

        return (
            <div className={ this.cn() }>
                <ReactComponent
                    ref={ (node) => {
                        this.reactComponent = node;
                    } }
                    { ...modifiedProps }
                />
            </div>
        );
    }
}
