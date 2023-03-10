
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Hero from '../../src/components/hero/Hero';

import activity from '../../data/activity.json';


import filtersData from '../../data/filtersActivity.json';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityListItem from '../../src/components/activity/ActivityListItem';

export default function Activity() {

  const act=activity[1];
  console.log({act})

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <Hero text='Activity'/>
      <ActivityFilters filters={filtersData} />
      <ActivityListItem user={act.user.username} nft={act.nft} created_at={act.nft.created_at}/>
      <Footer />
    </div>
  );
}