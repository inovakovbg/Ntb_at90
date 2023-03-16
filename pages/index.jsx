
import React from "react";
import { useState, useEffect } from "react";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";




// import dataUsers from "../data/users.json";

import Footer from "../src/components/footer/Footer";
// import dataTrending from "../data/trending.json";
// import dataNfts from "../data/nfts.json";

import feat from "../data/featured.json"
import TopCollectors from "../src/components/collectors/TopCollectors";




export default function Index() {





   const [featuredCards, setFeaturedCards] = useState([]);

   const [trendingItems, setTrendingItems] = useState([]);
   const [trendingFilters, setTrendingFilters] = useState([]);

   const [collectors, setCollectors] = useState([]);
   const [colectorFilters, setCollectorFilters] = useState([]);


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
      const result = await fetch(process.env.apiUrl + "/trending");
      const trendingData = await result.json();
      setTrendingItems(trendingData.nfts);
      setTrendingFilters(trendingData.filters);
   }, []);

   //TOP COLLECTORS

   useEffect(async () => {
      const result = await fetch(process.env.apiUrl + "/top-collectors");
      const topCollData = await result.json();

      topCollData.users.sort((a, b) => b.nftCount - a.nftCount);

      setCollectors(topCollData.users);
      setCollectorFilters(topCollData.filters);
   }, []);







   return (
      <div>
         <Header />
         <Featured items={featuredCards} />
         <Trending cards={trendingItems} filters={trendingFilters} />
         <TopCollectors collectors={collectors} filters={colectorFilters}/>

         <Footer />
      </div>
   );
}