
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ExploreTitle from '../../src/components/explore/ExploreTitle';
import filtersData from '../../data/filtersExplore.json';
import ExploreFilters from '../../src/components/explore/ExploreFilters';

export default function Explore() {



  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
       <ExploreTitle text='Explore'/>
       <ExploreFilters filters={filtersData} />
      <Footer />
    </div>
  );
}