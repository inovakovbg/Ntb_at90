
import React from "react";
import { useState, useEffect } from "react";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";




// import dataUsers from "../data/users.json";

import Footer from "../src/components/footer/Footer";
import dataTrending from "../data/trending.json";
// import dataNfts from "../data/nfts.json";

import feat from "../data/featured.json"
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";




export default function Index() {





   const [featuredCards, setFeaturedCards] = useState([]);

   const [trendingItems, setTrendingItems] = useState([]);
   const [trendingFilters, setTrendingFilters] = useState([]);

   const [collectors, setCollectors] = useState([]);
   const [colectorFilters, setCollectorFilters] = useState([]);

   const [auctions, setAuctions] = useState([]);
   const [auctionFilters, setAuctionFilters] = useState([]);

   const [filterValue, setFilterValue] = useState("");
   const handleChangeFilter = (event) => { setFilterValue(event.target.value); };

   
  
   const sortMethods = {
      "": (a, b) => null,
      asc: (a, b) => a.nftCount - b.nftCount,
      desc: (a, b) => b.nftCount - a.nftCount,
     
    };


   const filterMethods = {
      "": (nft) => nft.price,
      1: (nft) => nft.price <= 1,
      2: (nft) => nft.price >= 1 && nft.price <= 4,
     
    };

   // FEATURED
   useEffect(async () => {


      const result = await fetch(process.env.apiUrl + "/featured");
      const featuredData = await result.json();

      const updatedFeaturedCards = featuredData.nfts.map((item, index) => {
         return {
            ...item,
            cols: index === 0 ? 3 : 1,
            rows: index === 0 ? 2 : 1,
         };
      });

      setFeaturedCards(updatedFeaturedCards);
   }, []);

   //TRENDING
   useEffect(async () => {
      const urlTr = `${process.env.apiUrl}/trending?sort=${filterValue}`
      const result = await fetch(urlTr);

      // const result = await fetch(process.env.apiUrl + "/trending");

      const trendingData = await result.json();

      const dataTrend = trendingData.nfts.filter(filterMethods[filterValue]);

      setTrendingItems(dataTrend);
      setTrendingFilters(trendingData.filters);
      console.log(trendingData.filters)
   }, [filterValue]);

   //TOP COLLECTORS

   useEffect(async () => {
      const urlTop = `${process.env.apiUrl}/top-collectors?sort=${filterValue}`
      const result = await fetch(urlTop);
      // const result = await fetch(process.env.apiUrl + "/top-collectors");
      const topCollData = await result.json();

      // topCollData.users.sort((a, b) => a.nftCount - b.nftCount);

      const dataColl = topCollData.users;
      dataColl.sort(sortMethods[filterValue]);

      setCollectors(dataColl);
      setCollectorFilters(topCollData.filters);
   }, [filterValue]);

   //LIVE AUCTIONS
   useEffect(async () => {

      // const urlAuc = `${process.env.apiUrl}/live-auctions?sort=${filterValue}`
      // const result = await fetch(urlAuc);

      const result = await fetch(process.env.apiUrl + "/live-auctions");
      const auctionsData = await result.json();
      
      const dataAuct = auctionsData.nfts.filter(filterMethods[filterValue]);


      setAuctions(dataAuct);
      setAuctionFilters(auctionsData.nfts.filters);
      console.log(auctionFilters)
   }, [filterValue]);








   return (
      <div>
         <Header />
         <Featured items={featuredCards} />
         <Trending cards={trendingItems} 
            filters={trendingFilters} 
            filterTime={filterValue}
            handleChangeFilter={handleChangeFilter}/>

         <TopCollectors collectors={collectors}  
         filters={colectorFilters} 
         filterValue={filterValue}
         handleChangeFilter={handleChangeFilter}
         
         />

         <How title='HOW IT WORKS'
            description="Discover, collect, and sell extraordinary NFTs
       on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
            items={[
               {
                  "title": "DIGITAL CURRENCY",
                  "description": 'You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange',
               },
               {
                  "title": 'CRYPTO WALLET',
                  "description": 'A crypto wallet, such as Metamask, stores your ETH and processes transactions on the Ethereum blockchain.',
               },
               {
                  "title": 'BUM.',
                  "description": "Let'connect your wallet to BUM,edit your profile,and begin interacting in the space.",
               }
            ]} />

         <Auctions cards={auctions}
           filters={auctionFilters} 
           filterValue={filterValue}
           handleChangeFilter={handleChangeFilter} />
         <Footer />
      </div>
   );
}