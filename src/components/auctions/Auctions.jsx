import React from 'react';
import Logo from '../logo/Logo';
import styles from "./Auctions.module.scss";
import classNames from "classnames";

import {Container , Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';



export default function Auctions({ cards = [] }) {

    return (
        <div className={classNames(styles.wrapper)}>
        <Container 
              maxWidth='xl'>
              <Box className={classNames(styles.box)}>
                
                     <Typography className={classNames(styles.heading)} variant='h2'>Live Auctions</Typography>

            <Select className={classNames(styles.select)}
                value='This week'
                label='This week'>
                <MenuItem value="This week">This week</MenuItem>
            </Select>

            </Box>
            <Grid className={classNames(styles.grid)}
                container spacing={1}
                justifyContent='space-between'
                alignItems='center'>

                {cards.map((card) => {

                    return (
                        <Grid Grid item xs={3}>
                            <Card name={card.name}
                                user={card.user}
                                likes={card.likes}
                                mediaUrl={card.mediaUrl}
                                price={card.price}
                                currency={card.currency}
                                timeLeft={card.timeLeft}
                            />
                        </Grid>)
                })}
            </Grid>

        </Container>
        </div>


    )
}


