import React from 'react';
import Logo from '../logo/Logo';
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { Button, TextField, InputAdornment, Typography } from "@mui/material";



export default function Header() {

    return (
        <footer>
            <Container maxWidth='xl'>
                <Grid className={styles.container} container justifyContent="space-around">


                    <Grid item
                        xs={'1'}>
                        <Logo type="muted" />
                    </Grid>

                    <Grid item
                        xs={'7'}>
                        <Typography className={styles.paragraph}>
                            Bum All Rights Reserved 2023
                        </Typography>
                    </Grid>

                    <Grid item
                        xs={'auto'} >
                        <Button className={styles.button} variant="text">Privacy Policy</Button>
                        <Button className={styles.button} variant="text">Coockie Policy</Button>
                    </Grid>

                </Grid>

            </Container>
        </footer>


    )
}


