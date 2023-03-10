
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileHero from '../../src/components/profile/ProfileHero';
import filtersData from '../../data/filtersProfile.json';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import profileData from '../../data/profile.json';

export default function Profile() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <ProfileHero image={profileData.avatar.backgroundUrl} />
      <ProfileUser

        name={profileData.username}
        info={profileData.info}
       
        avatar={profileData.avatar.url}
        verified={profileData.verified}
      />

      <ProfileCollection user={profileData} filters={filtersData} items={profileData.nfts}/>

      <Footer />
    </div>
  );
}