import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cn from 'arui-feather/cn';
import PlaygroundError from 'rsg-components/PlaygroundError';
import ReactExample from 'rsg-components/ReactExample';
import ThemeProvider from 'arui-feather/theme-provider';
import createContextProvider from '../utils/create-context-provider';

const improveErrorMessage = message => message.replace(
    'Check the render method of `StateHolder`.',
    'Check the code of your example in a Markdown file or in the editor below.'
);

@cn('preview')
export default class extends Component {
    static propTypes = {
        code: PropTypes.string.isRequired,
        evalInContext: PropTypes.func.isRequired
    };

    static contextTypes = {
        theme: PropTypes.string.isRequired,
        config: PropTypes.object.isRequired,
        codeRevision: PropTypes.number.isRequired
    };

    state = {
        error: null
    };

    constructor(props, context) {
        super(props, context);
        this.state.theme = context.theme;
    }

    componentDidMount() {
        /*
         * Clear console after hot reload, do not clear on the first load
         * to keep any warnings
         */
        if (this.context.codeRevision > 0) {
            // eslint-disable-next-line no-console
            console.clear();
        }

        this.executeCode();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            this.state.error !== nextState.error ||
            this.props.code !== nextProps.code ||
            this.context !== nextContext
        );
    }

    componentDidUpdate(prevProps) {
        // TODO: реакция на изменение контекста

        if (this.props.code !== prevProps.code || this.state.theme !== this.context.theme) {
            this.executeCode();
        }

        if (this.state.theme !== this.context.theme) {
            this.setState({ // eslint-disable-line react/no-did-update-set-state
                theme: this.context.theme
            });
        }
    }

    componentWillUnmount() {
        this.unmountPreview();
    }

    render(cn) {
        const { error } = this.state;

        return (
            <div className={ cn() } >
                <div
                    ref={ (ref) => {
                        this.mountNode = ref;
                    } }
                />
                { error && <PlaygroundError message={ error } /> }
            </div>
        );
    }

    @autobind
    handleError(err) {
        this.unmountPreview();

        this.setState({
            error: improveErrorMessage(err.toString())
        });

        console.error(err); // eslint-disable-line no-console
    }

    unmountPreview() {
        if (this.mountNode) {
            ReactDOM.unmountComponentAtNode(this.mountNode);
        }
    }

    executeCode() {
        this.setState({
            error: null
        });

        const { code } = this.props;

        if (!code) {
            return;
        }

        const ContextProvider = createContextProvider(this.context);

        const wrappedComponent = (
            <ContextProvider>
                <ThemeProvider theme={ this.context.theme }>
                    <ReactExample
                        code={ code }
                        evalInContext={ this.props.evalInContext }
                        onError={ this.handleError }
                        compilerConfig={ this.context.config.compilerConfig }
                    />
                </ThemeProvider>
            </ContextProvider>
        );

        window.requestAnimationFrame(() => {
            this.unmountPreview();
            try {
                ReactDOM.render(wrappedComponent, this.mountNode);
            } catch (err) {
                this.handleError(err);
            }
        });
    }
}

