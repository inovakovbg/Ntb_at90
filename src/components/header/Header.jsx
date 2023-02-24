import React from 'react';
import Logo from '../logo/Logo';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { Grid, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {

    return (
        
            <Container maxWidth="false" disableGutters className={styles.container}> 
            
                <Grid container direction="row"  maxWidth='xl' className={styles.grid}              
                  
                >

                    <Grid item xs={'1'} className={styles.logo}> 
                        <Logo type="default" />
                    </Grid>

                    <Grid item xs={'6'}  >
                        <TextField variant='outlined'  className={styles.input} 


                            placeholder="Find items,users and activities"

                            InputProps={{

                                startAdornment: (
                                    <InputAdornment 
                                        position="start"
                                    >
                                        <SearchIcon className={styles.icon}  />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={'3'} className={styles.buttons} >
                        <Button variant="text">Text</Button>
                        <Button variant="text">Activity</Button>
                        <Button variant="contained">Explore</Button>

                    </Grid>

                </Grid>

            </Container>
       

    )
}


