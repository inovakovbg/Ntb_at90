import React from 'react';

import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";

import { Button, Container, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';
import Collector from './Collector';
import { useState } from 'react';



export default function CollectorColumn({ items = [] }) {

    
    return (
        <div>
            <Container className={styles.container} disableGutters >

               

                        {items.map((item, index) => {

                           
                            const type = index % 2 !== 0 ? "lighter" : "darker";


                            return (
                                

                                    <Collector number={index + 1}
                                        name={item.name}
                                        type={type}
                                        nftsCount={item.nftsCount}
                                        verified={item.verified}
                                        avatar={item.avatar.url}
                                        
                                        id={item.id}


                                    />
                                )
                        })}

               

            </Container>
        </div>


    )
}


