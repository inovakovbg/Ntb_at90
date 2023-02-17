import React from 'react';

import styles from "./How.module.scss";
import classNames from "classnames";

import { Button,Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';
import Step from './Step';



export default function How({title,description,link, items = [] }) {

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={styles.container} disableGutters maxWidth='xl'>

                <Grid container direction="row" className={styles.grid} 
                  
                >

                    <Grid item xs={7} container 
                          className={styles.gridLeft}   >
                            
                        <Typography  className={styles.textTitle}> {title}</Typography>
                        <Typography  className={styles.textDescription}> {description}</Typography>
                        <Button className={styles.button} href={link} variant="contained">LEARN MORE</Button>
                    </Grid>

                    <Grid item container className={styles.gridRight}  
                         xs={5} direction="row" spacing={2}
                        >

                         {items.map((card, index) => {

                            return (
                                <Grid item >
                                    <Step number={index + 1}
                                        title={card.title}
                                        description={card.description}

                                    />
                                </Grid>)
                        })} 

                    </Grid>

                </Grid>

            </Container>
        </div>


    )
}


