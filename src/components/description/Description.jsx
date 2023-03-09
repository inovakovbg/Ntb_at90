import React from 'react';
import styles from "./Description.module.scss";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';


export default function Hero({text, image }) {

    return (
        <div className={styles.description}>
            <Typography variant='body1' className={styles.atext}>
                {text}
            </Typography>

            <img className={styles.image} src={image}/> 
        </div>
    )
}


