import React from 'react';
import classNames from 'classnames';
import styles from "./Avatar.module.scss";

export default function Avatar({size=90 ,url='/images/avatar.png',verified=true}) {
    return( 
    <div className={classNames(styles.avatar)} style={{width:size+"px", height:size+"px"}}>
            <img className={classNames(styles.image)} src={url}/> 
            {verified && <img className={classNames(styles.badge)}  src={'/images/verified.svg'}/> } 
    </div>            
    )
}






