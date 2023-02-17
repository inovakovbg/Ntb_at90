import React from 'react';

import styles from "./Featured.module.scss";
import classNames from "classnames";

import { Button, Container, ImageList, ImageListItem, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '../card/Card';
import Step from './Step';



export default function Featured({ items = [] }) {

    return (
        <div >
            <Container className={styles.container} disableGutters maxWidth='xl'>


                <ImageList  cols={4} >
                    {items.map((item) => (
                        <ImageListItem key={item.img}    >
                            <img className={styles.image}
                                src={item.image}
                                alt={item.title}
                                
                            />
                        </ImageListItem>
                    ))}
                </ImageList>



                {/* {items.map((card, index) => {

                            return (
                                <Grid item >
                                    <Step number={index + 1}
                                        title={card.title}
                                        description={card.description}

                                    />
                                </Grid>)
                        })}  */}


            </Container>
        </div>


    )
}


