import React from 'react';
import styles from "./ProfileUser.module.scss";
import { Typography } from '@mui/material';
import Avatar from '../avatar/Avatar';



export default function ProfileUser({ name, info, avatar, verified }) {

    return (
        <div className={styles['profile-user']}>
            <Avatar size={192} url={avatar} verified={verified} />
            <Typography variant='h3' className={styles.name} >
                {name}
            </Typography>
            <Typography variant='body1' className={styles.info} >
                {info}
            </Typography>

        </div>
    )
}


