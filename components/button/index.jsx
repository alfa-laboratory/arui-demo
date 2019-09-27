import React from 'react';
import Type from 'prop-types';

import FeatherButton from 'arui-feather/button';

/**
 * Компонент кнопки (да, она нажимается!).
 */
class Button extends React.Component {
    static propTypes = {
        /** Текст кнопки */
        text: Type.node,
        /** Иконка кнопки */
        icon: Type.node
    }

    render() {
        return (
            <FeatherButton
                view='extra'
            >
                Кнопка
            </FeatherButton>
        );
    }
}

export default Button;
