import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import RsgEditor from 'react-styleguidist/lib/client/rsg-components/Editor/Editor';
import IconButton from 'arui-feather/icon-button';
import IconShare from 'arui-feather/icon/action/share-ios';
import './editor.css';

export default class extends PureComponent {
    static propTypes = {
        code: PropTypes.string
    };

    cn = createCn('editor');

    handleShareExampleClick = () => {
        const code = encodeURI(this.props.code);
        const { pathname } = window.location;

        window.open(`${pathname}#playground/code=${code}`, '_blank');
    }

    render() {
        return (
            <div className={ this.cn() }>
                <IconButton
                    onClick={ this.handleShareExampleClick }
                    className={ this.cn('share-button') }
                    title='Ссылка на результат'
                >
                    <IconShare />
                </IconButton>
                <RsgEditor { ...this.props } />
            </div>
        );
    }
}
