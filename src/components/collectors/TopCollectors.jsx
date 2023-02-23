import React from 'react';
import Logo from '../logo/Logo';
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";

import { Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import CollectorColumn from './CollectorColumn';
import lodash from 'lodash';




export default function TopCollectors({collectors = [] }) {

    return (
        <div className={classNames(styles.wrapper)}>
            <Container
                maxWidth='xl'>
                <Box >

                    <Typography className={classNames(styles.heading)} variant='h2'>Top Collectors</Typography>

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


                    {/* 
                    {collectors.map((abv, index) =>{ ({ ...abv, 'id':index+1})}
                     

                    )}  */}




                    {lodash.chunk(

                        collectors.map((abv, index) => ({ ...abv, 'id': index + 1 })), 3)

                        .map((item) => {
                            return (
                                <Grid item xs={3}>
                                    <CollectorColumn items={item} />
                                </Grid>)
                        })}




                </Grid>

            </Container>
        </div>


    )
}


