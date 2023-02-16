import React from 'react';
import classNames from 'classnames';

export default function Logo({type}) {
    return <img src={ type === 'default' ? "/images/logo.svg" : "/images/logo-muted.svg"}/>  
}

// Logo.defaultProps = {type: 'default'}




