import React from 'react';
import classNames from 'classnames';

export default function logo({type}) {
    return <img src={ type === 'default' ? "/images/logo.svg" : "/images/logo-muted.svg"}/>  
}

logo.defaultProps = {type: 'default'}




