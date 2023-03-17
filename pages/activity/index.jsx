import React from "react";
import { useState, useEffect } from "react";
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Hero from '../../src/components/hero/Hero';

// import activity from '../../data/activity.json';


import filtersData from '../../data/filtersActivity.json';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';

export default function Activity() {

  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState([]);

  const [sortMethod, setSortMethod] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleChangeSort = (event) => { setSortMethod(event.target.value); };
  const handleChangeFilter = (event) => { setFilterType(event.target.value); };

  const sortMethods = {
    "": (a, b) => null,
    1: (a, b) => new Date(a.created_at) - new Date(b.created_at),
    2: (a, b) => new Date(b.created_at) - new Date(a.created_at),
    3: (a, b) => a.nft.name.localeCompare(b.nft.name),
    4: (a, b) => b.nft.name.localeCompare(a.nft.name),
    5: (a, b) => a.nft.price - b.nft.price,
    6: (a, b) => b.nft.price - a.nft.price,
  };

  const filterMethods = {
    "":(act) => act.type,
    7: (act) => act.type = "Liked",
    8: (act) => act.type = "Bought",
  
  };



  useEffect(() => {
    (async () => {
      const url = `${process.env.apiUrl}/activities?sort=${sortMethod}&type=${filterType}`
      console.log(url)
      const result = await fetch(url);
      const exploreActivity = await result.json();

      const dataAct = exploreActivity.activities.filter(filterMethods[filterType]);
      dataAct.sort(sortMethods[sortMethod]);

      setActivity(dataAct);
      setActivityFilters(exploreActivity.filters);

    })();
    }, [sortMethod, filterType]);


    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Header />
        <Hero text='Activity' />
        <ActivityFilters 
             filters={activityFilters}
             sortMethod={sortMethod}
             filterType={filterType}
             handleChangeSort={handleChangeSort}
             handleChangeFilter={handleChangeFilter}
          
        />
        <ActivityList items={activity} />
        <Footer />
      </div>
    );
  }