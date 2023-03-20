
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

  const [sortMethod, setSortMethod] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const handleChangeSort = (event) => { setSortMethod(event.target.value); };
  const handleChangeFilter = (event) => { setFilterPrice(event.target.value); };

  const [nfts, setNfts] = useState([]);


  const sortMethods = {
    "": (a, b) => null,
    1: (a, b) => new Date(a.created_at) - new Date(b.created_at),
    2: (a, b) => new Date(b.created_at) - new Date(a.created_at),
    3: (a, b) => a.name.localeCompare(b.name),
    4: (a, b) => b.name.localeCompare(a.name),
    5: (a, b) => a.price - b.price,
    6: (a, b) => b.price - a.price,
  };

  const filterMethods = {
    "": (nft) => nft.price,
    7: (nft) => nft.price <= 1,
    8: (nft) => nft.price >= 1 && nft.price <= 4,
    9: (nft) => nft.price >= 4 && nft.price <= 10,
  };


  useEffect(async () => {
    try {
      if (!id) return; 

      const url = `${process.env.apiUrl}/users/${id}?sort=${sortMethod}&price=${filterPrice}`;
      console.log(url)
      const result = await fetch(url);
      
      // const result = await fetch(process.env.apiUrl + `/users/${id}`);


      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const profileData = await result.json();

      

      const nftsData = profileData.user.nfts.filter(filterMethods[filterPrice]);
      nftsData.sort(sortMethods[sortMethod]);
      console.log(nftsData);
      setNfts(nftsData);

      setProfile(profileData.user);


      setProfileFilters(profileData.filters);
    } catch (error) {
      console.error('Error fetching profile data:', error);
      console.error('Server response:', await result.text());
    }
  }, [id,filterPrice,sortMethod]);




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

      <ProfileCollection user={profile} filters={profileFilters} 
      
      
      filterPrice={filterPrice}
      sortMethod={sortMethod}
      handleChangeFilter={handleChangeFilter}
      handleChangeSort={handleChangeSort}
      items={profile?.nfts}/>

      <Footer />
    </div>
  );
}