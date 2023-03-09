
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileHero from '../../src/components/profile/ProfileHero';

export default function Profile() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Header />
      <ProfileHero image="/images/avatar.png"/>
      <ProfileUser 
      
        name="fredrika_a"
        info="What are they they are the broken promise and to do is out of reach.
        Hand over the candy notes food is so expensive to the Cashier.
        "
        avatar="/images/avatar.png"
        verified={true}    
      />
      <Footer />
    </div>
  );
}