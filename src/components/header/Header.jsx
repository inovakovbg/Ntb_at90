import React from 'react';
import Logo from '../logo/Logo';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { Grid, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {

    return (
        <div>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <Grid container spacing={3}
                    // justifyContent='space-between'
                    alignItems='center'
                >

                    <Grid item xs={'1'}>
                        <Logo type="default" />
                    </Grid>

                    <Grid item xs={'8'}>
                        <TextField


                            placeholder="Find items,users and activities"

                            InputProps={{

                                startAdornment: (
                                    <InputAdornment
                                            className={styles.search}
                                        position="start"
                                    >
                                        <SearchIcon
                                           className={classNames(styles.search)} />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={'3'}>
                        <Button variant="text">Text</Button>
                        <Button variant="text">Activity</Button>
                        <Button variant="contained">Explore</Button>

                    </Grid>

                </Grid>

            </Container>
        </div>

    )
}


