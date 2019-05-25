import cn from 'arui-feather/cn'
import { PureComponent } from 'react';
import RsgEditor from 'react-styleguidist/lib/client/rsg-components/Editor/Editor';
import IconButton from 'arui-feather/icon-button';
import IconShare from 'arui-feather/icon/action/share-ios';
import './editor.css';

@cn('editor')
export default class extends PureComponent{
    render(cn) {
        return (
            <div className={ cn() }>
                <IconButton
                    onClick={ this.handleShareExampleClick }
                    className={ cn('share-button') }
                    title='Ссылка на результат'
                >
                    <IconShare />
                </IconButton>
                <RsgEditor { ...this.props }/>
            </div>
        );
    }

    handleShareExampleClick = () => {
        console.log(this.props)
        const code = encodeURI(this.props.code);
        const { pathname } = window.location;
        window.open(`${pathname}#playground/code=${code}`, '_blank');
    }
}
