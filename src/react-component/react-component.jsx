import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent';

export default class extends Component {
    static propTypes = {
        component: {
            props: {
                examples: PropTypes.array
            }
        }
    };

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
            <ReactComponent
                ref={ (node) => {
                    this.reactComponent = node;
                } }
                { ...modifiedProps }
            />
        );
    }
}
