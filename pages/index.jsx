
import React from "react";
import { useState, useEffect } from "react";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";




// import dataUsers from "../data/users.json";

import Footer from "../src/components/footer/Footer";
// import dataTrending from "../data/trending.json";
// import dataNfts from "../data/nfts.json";




export default function Index() {





   const [featuredCards, setFeaturedCards] = useState([]);

   useEffect(async () => {
      const result = await fetch(process.env.apiUrl + "/featured");
      const featuredData = await result.json();

      const updatedFeaturedCards = featuredData.nfts.map((item, index) => {
         if (index === 0) {
           return {
             ...item,
             cols: 3,
             rows: 2,
           };
         }
         return item;
       });

      setFeaturedCards(updatedFeaturedCards);
    }, []);

    return (
      <div>
        <Header />
        <Featured items={featuredCards} />
        <Footer />
      </div>
    );
  }