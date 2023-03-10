
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Hero from '../../src/components/hero/Hero';


import filtersData from '../../data/filtersActivity.json';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityListItem from '../../src/components/activity/ActivityListItem';

export default function How() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <Hero text='Activity'/>
      <ActivityFilters filters={filtersData} />
      <ActivityListItem/>
      <Footer />
    </div>
  );
}