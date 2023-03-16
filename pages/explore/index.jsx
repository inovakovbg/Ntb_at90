
import React from "react";
import { useState, useEffect } from "react";
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ExploreTitle from '../../src/components/explore/ExploreTitle';
import filtersData from '../../data/filtersExplore.json';
import ExploreFilters from '../../src/components/explore/ExploreFilters';
import { Container, Grid } from '@mui/material';

import Card from '../../src/components/card/Card';



export default function Explore() {


  const [nfts, setNfts] = useState([]);
  const [nftFilters, setNftFilters] = useState([]);


  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + "/explore");
    const exploreData = await result.json();
    setNfts(exploreData.nfts);
    setNftFilters(exploreData.filters);
  }, [nfts]);



  return (
    <div >
      <Header />
      <Container maxWidth='xl' disableGutters>

        <Grid container spacing={2} sx={{ margin: '10px 0' }} justifyContent="space-between" alignItems="center">
          <Grid item xs={5}>
            <ExploreTitle text='Explore' />
          </Grid>
          <Grid item xs={7}>
            <ExploreFilters filters={nftFilters} />
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ margin: '10px 0' }} justifyContent="space-between" >
          {nfts.map((card) => {

            return (
              <Grid Grid item xs={3}>
                <Card name={card.name}
                  user={card.owner}
                  likes={card.likes}
                  mediaUrl={card.mediaUrl}
                  price={card.price}
                  currency={card.currency}
                />
              </Grid>)
          })}
        </Grid>

      </Container>
      <Footer />
    </div>
  );
}