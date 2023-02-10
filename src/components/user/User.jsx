import React from 'react';
import classNames from 'classnames';
import styles from "./User.module.scss";
import Avatar from '../avatar/Avatar';

export default function User({name='', info='', avatar='', size=55, verified=false }) {
    return( 
    <div className={classNames(styles.user)} style={{width:size, height:size}}>
        <Avatar url="/images/avatar.png" size={size} verified={verified}/>
        <p  className={classNames(styles.name)}>{name}</p>
        <p  className={classNames(styles.info)}>{info}</p>
            
    </div>            
    )
}





