import React from 'react';

import styles from "./How.module.scss";
import classNames from "classnames";

import { Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';
import Step from './Step';



export default function How({ items = [] }) {

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={styles.container}
                maxWidth='xl'>

                <Grid container direction="row"
                    className={classNames(styles.grid)}
                    alignItems="center"
                    justifyContent='center'
                >

                    <Grid item xs={7} container justifyContent="flex-start" 
                          className={styles.num}   >
                        <Typography align="center" className={styles.textNum}> Text</Typography>
                    </Grid>

                    <Grid item container
                        rowSpacing={2} xs={5}
                        justifyContent="flex-end" >

                        {items.map((card, index) => {

                            return (
                                <Grid item>
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


