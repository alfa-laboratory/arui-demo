import PropTypes from 'prop-types';

export default function createContextProvider(context) {
    class ContextProvider extends React.Component {
        static propTypes = {
            children: PropTypes.node
        };

        getChildContext() {
            return context;
        }

        render() {
            return this.props.children;
        }
    }

    ContextProvider.childContextTypes = {};
    Object.keys(context).forEach((key) => {
        ContextProvider.childContextTypes[key] = PropTypes.any.isRequired;
    });

    return ContextProvider;
}
