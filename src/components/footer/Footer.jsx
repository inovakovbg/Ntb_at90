import React from 'react';
import Logo from '../logo/Logo';
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { Button,Typography } from "@mui/material";



export default function Footer() {

    return (
       
            <Container maxWidth='false'  disableGutters className={styles.container}>
                <Grid  container  direction="row" maxWidth='xl' className={styles.grid}>


                    <Grid item xs={'1'} className={styles.logo}>
                        <Logo  type="muted" />
                    </Grid>

                    <Grid item xs={'auto'}>
                        <Typography  className={styles.paragraph}>
                            Bum All Rights Reserved 2023
                        </Typography>
                    </Grid>

                    <Grid item xs={'3'} className={styles.buttons} >
                        <Button className={styles.button} variant="text">Privacy Policy</Button>
                        <Button className={styles.button} variant="text">Coockie Policy</Button>
                    </Grid>

                </Grid>

            </Container>
        


    )
}


