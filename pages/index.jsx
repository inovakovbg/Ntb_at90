
import React from "react";
import { useState, useEffect } from "react";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";




// import dataUsers from "../data/users.json";

import Footer from "../src/components/footer/Footer";
// import dataTrending from "../data/trending.json";
// import dataNfts from "../data/nfts.json";

import feat from "../data/featured.json"




export default function Index() {





   const [featuredCards, setFeaturedCards] = useState([]);

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

   return (
      <div>
         <Header />
         <Featured items={featuredCards} />

         {/* <Featured items={[
            {
               image:
                  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
               title: "Breakfast",
               rows: 2,
               cols: 3,
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
               title: "Burger",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
               title: "Camera",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
               title: "Coffee",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
               title: "Hats",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
               title: "Honey",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
               title: "Basketball",
               href: "/about",
            },


         ]} />  */}
         <Footer />
      </div>
   );
}