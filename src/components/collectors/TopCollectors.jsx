import React from 'react';
import Logo from '../logo/Logo';
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";

import { Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import CollectorColumn from './CollectorColumn';
import lodash from 'lodash';




export default function TopCollectors({ collectors = [] }) {

    return (
        <div>
            <Container maxWidth='xl' disableGutters className={styles.container}>
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Typography variant='h2'>Top Collectors</Typography>

                    <Select className={classNames(styles.select)}
                        value='This week'
                        label='This week'>
                        <MenuItem value="This week">This week</MenuItem>
                    </Select>

                </Box>

                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid className={classNames(styles.grid)} container spacing={2}>


                        {lodash.chunk(

                            collectors.map((abv, index) => ({ ...abv, 'id': index + 1 })), 3)

                            .map((item) => {
                                return (
                                    <Grid item xs={3}>
                                        <CollectorColumn items={item} />
                                    </Grid>)
                            })}

                    </Grid>
                </Box>

            </Container>
        </div>


    )
}


