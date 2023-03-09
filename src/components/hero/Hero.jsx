import React from 'react';
import styles from "./Hero.module.scss";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';


export default function Hero({text="hOW IT WORKS"}) {

    return (
        <div className={styles.hero}>
        <Container>
            <Typography variant='h1' className={styles.text}>{text} </Typography>
      
            </Container>
        </div>

    )
}


