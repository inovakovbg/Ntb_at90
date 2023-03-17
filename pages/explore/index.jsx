
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
  const [filtersNft, setNftFilters] = useState({});

  const [sortMethod, setSortMethod] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const handleChangeSort = (event) => { setSortMethod(event.target.value); };
  const handleChangeFilter = (event) => { setFilterPrice(event.target.value); };

  const sortMethods = {
    "": (a, b) => null,
    1: (a, b) => new Date(a.created_at) - new Date(b.created_at),
    2: (a, b) => new Date(b.created_at) - new Date(a.created_at),
    3: (a, b) => a.name.localeCompare(b.name),
    4: (a, b) => b.name.localeCompare(a.name),
    5: (a, b) => a.price - b.price,
    6: (a, b) => b.price - a.price,
  };

  const filterMethods = {
    "": (nft) => nft.price,
    7: (nft) => nft.price <= 1,
    8: (nft) => nft.price >= 1 && nft.price <= 4,
    9: (nft) => nft.price >= 4 && nft.price <= 10,
  };



  useEffect(() => {
    (async () => {

      const result = await fetch(process.env.apiUrl + "/explore");
      const exploreData = await result.json();

      const dataNfts = exploreData.nfts.filter(filterMethods[filterPrice]);
      dataNfts.sort(sortMethods[sortMethod]);
      setNfts(dataNfts);
      setNftFilters(exploreData.filters);

    })();
  }, [sortMethod, filterPrice]);




  return (
    <div >
      <Header />
      <Container maxWidth='xl' disableGutters>

        <Grid container spacing={2} sx={{ margin: '10px 0' }} justifyContent="space-between" alignItems="center">
          <Grid item xs={5}>
            <ExploreTitle text='Explore' />
          </Grid>
          <Grid item xs={7}>



            <ExploreFilters
              filters={filtersNft}
              sortMethod={sortMethod}
              filterPrice={filterPrice}
              handleChangeSort={handleChangeSort}
              handleChangeFilter={handleChangeFilter}
            />

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