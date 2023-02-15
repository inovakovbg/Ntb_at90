import React from 'react';
import Logo from '../logo/Logo';
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { Grid, Button, TextField, InputAdornment, Typography } from "@mui/material";


export default function Header() {

    return (
        <div>
            <Container className={styles.container} maxWidth="xl">
                <Grid 
                    container spacing={3}
                    justifyContent='space-between'
                    alignItems='center'
                >

                    <Grid item 
                        xs={'1'}>
                        <Logo type="muted" />
                    </Grid>

                    <Grid item
                         xs={'auto'} className={styles.paragraph}>
                        <Typography>
                            Bum All Rights Reserved 2023
                        </Typography>
                    </Grid>

                    <Grid item
                         xs={'4'} className={styles.button}>
                        <Button size="small" variant="text">Privacy Policy</Button>
                        <Button variant="text">Coockie Policy</Button>
                    </Grid>

                </Grid>

            </Container>
        </div>


    )
}


