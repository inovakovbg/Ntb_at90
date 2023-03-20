import React from 'react';
import Logo from '../logo/Logo';
import styles from "./Auctions.module.scss";
import classNames from "classnames";

import { Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';



export default function Auctions({ cards = [], filters, filterValue, handleChangeFilter }) {

    return (
        <div>
            <Container maxWidth='xl' className={styles.container} disableGutters >

                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Typography variant='h2'>Live Auctions</Typography>

                    <Select className={classNames(styles.select)}
                        
                        value={filterValue}
                        onChange={handleChangeFilter}
                    >

                        {Object.values(filters).length > 0 &&
                            filters.price.map((option) => (
                                <MenuItem value={option.value} >
                                    {option.label}
                                </MenuItem>
                            ))}
                    </Select>

                </Box>
                <Grid className={classNames(styles.grid)} container spacing={2}>

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


