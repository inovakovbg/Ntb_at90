
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Hero from '../../src/components/hero/Hero';

import activity from '../../data/activity.json';


import filtersData from '../../data/filtersActivity.json';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';

export default function Activity() {

  // const act=activity[0];
  // console.log(act.user.username)

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      {/* <Header />
      <Hero text='Activity'/>
      <ActivityFilters filters={filtersData} /> */}
      <ActivityList items={activity} />
      {/* <Footer /> */}
    </div>
  );
}