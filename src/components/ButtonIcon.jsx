// @flow
import * as React from 'react';

const ButtonIcon = ({icon, action}) => {
    return (
        <div className="button" onClick={action}>
            <div className="button-icon">
                {icon}
            </div>
        </div>
    );
}

export default ButtonIcon;