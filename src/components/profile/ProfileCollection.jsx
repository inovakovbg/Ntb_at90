import React, { useEffect } from 'react';

import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";

import { Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';
import ProfileCollectionFilters from './ProfileCollectionFilters';



export default function ProfileCollection({ user, filter, items = [] }) {



    return (
        <div className={styles['profile-collection']}>
            <Container maxWidth='xl' className={styles.container} disableGutters>

                <Grid className={styles.grid} container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <Typography variant='h3'>Collection</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filter} />
                    </Grid>
                </Grid>


                <Grid className={classNames(styles.cards)}
                    container spacing={1}
                
                    alignItems='center'>

                    {items.map((card) => {

                        return (
                            <Grid Grid item xs={3}>
                                <Card name={card.name}
                                    user={card.user}
                                    likes={card.likes}
                                    mediaUrl={card.mediaUrl}
                                    price={card.price}
                                    currency={card.currency}
                                />
                            </Grid>)
                    })}
                </Grid>

            </Container>
        </div>


    )
}


