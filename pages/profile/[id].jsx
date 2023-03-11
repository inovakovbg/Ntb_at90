
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileHero from '../../src/components/profile/ProfileHero';
import filtersData from '../../data/filtersProfile.json';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import user from '../../data/profile.json';

export default function Profile() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <ProfileHero image={user.avatar.backgroundUrl} />
      <ProfileUser

        name={user.username}
        info={user.info}
       
        avatar={user.avatar.url}
        verified={user.verified}
      />

      <ProfileCollection user={user} filters={filtersData} items={user.nfts}/>

      <Footer />
    </div>
  );
}