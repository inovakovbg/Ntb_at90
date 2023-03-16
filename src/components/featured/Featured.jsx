import React from 'react';

import styles from "./Featured.module.scss";
import classNames from "classnames";

import { Button, Container, ImageList, ImageListItem, Grid, Select, MenuItem, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'



export default function Featured({ items = [] }) {


    const handleClick = (e) => {
        e.preventDefault();
        router.push(`product/${item.id}`);
      };
    
    return (
        <div >
            <Container className={styles.container} disableGutters maxWidth='xl'>


                <ImageList cols={6} >
                    {items.map((item) => {

                        const router = useRouter()

                        const handleClick = (e) => {
                            e.preventDefault()
                            router.push(item.href)
                        }


                        return (<ImageListItem key={item.image} cols={item.cols} rows={item.rows}  >
                            <img className={styles.image}
                                src={item.image}
                                alt={item.title}
                                onClick={handleClick}

                            />
                        </ImageListItem>
                        )
                    })}
                </ImageList>

            </Container>
        </div>


    )
}


