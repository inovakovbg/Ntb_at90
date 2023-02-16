import React from 'react';
import Logo from '../logo/Logo';
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { Button, TextField, InputAdornment, Typography } from "@mui/material";



export default function Header() {

    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container rowSpacing={1}
                      className={styles.container} >


                    <Grid item xs={'auto'}>
                        <Logo type="muted" />
                    </Grid>

                    <Grid item xs={'auto'}>
                        <Typography variant="body2" className={styles.paragraph}>
                            Bum All Rights Reserved 2023
                        </Typography>
                    </Grid>

                    <Grid item xs={'auto'} >
                        <Button className={styles.button} variant="text">Privacy Policy</Button>
                        <Button className={styles.button} variant="text">Coockie Policy</Button>
                    </Grid>

                </Grid>

            </Container>
        </div>


    )
}


