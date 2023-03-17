
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../../src/components/header/Header';
import Footer from '../../../src/components/footer/Footer';
import ProfileUser from '../../../src/components/profile/ProfileUser';
import ProfileHero from '../../../src/components/profile/ProfileHero';
import filtersData from '../../../data/filtersProfile.json';
import ProfileCollection from '../../../src/components/profile/ProfileCollection';
import user from '../../../data/profile.json';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState(null);
  const [profileFilters, setProfileFilters] = useState(null);

  useEffect(async () => {
    try {
      if (!id) return; 
      console.log(`/users/${id}`);
      const result = await fetch(process.env.apiUrl + `/users/${id}`);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const profileData = await result.json();
      setProfile(profileData.user);
      setProfileFilters(profileData.fiters);
    } catch (error) {
      console.error('Error fetching profile data:', error);
      console.error('Server response:', await result.text());
    }
  }, [id]);




  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <ProfileHero image={profile?.avatar.backgroundUrl} />
      <ProfileUser

        name={profile?.username}
        info={profile?.info}
       
        avatar={profile?.avatar.url}
        verified={profile?.verified}
      />

      <ProfileCollection user={profile} filters={filtersData} items={profile?.nfts}/>

      <Footer />
    </div>
  );
}