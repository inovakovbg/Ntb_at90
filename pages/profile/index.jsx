
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileHero from '../../src/components/profile/ProfileHero';
import filtersData from '../../data/filtersProfile.json';
import ProfileCollectionFilters from '../../src/components/profile/ProfileCollectionFilters';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import profileData from '../../data/profile.json';

export default function Profile() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <ProfileHero image="/images/avatar.png" />
      <ProfileUser

        name={profileData.username}
        info="What are they they are the broken promise and to do is out of reach.
        Hand over the candy notes food is so expensive to the Cashier.
        "
        avatar="/images/avatar.png"
        verified={true}
      />

      {/* <ProfileCollectionFilters filters={filtersData} /> */}

      <ProfileCollection user={profileData.username} filter={filtersData} items={profileData.nfts}/>

      <Footer />
    </div>
  );
}