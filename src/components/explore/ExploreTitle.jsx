import React from 'react';
import styles from "./ExploreTitle.module.scss";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';


export default function ExploreTitle({ text }) {

    return (
        <div className={styles['explore-title']}>
            <Typography variant='h1' className={styles.text}>
                {text}
            </Typography>
        </div>
    )
}


