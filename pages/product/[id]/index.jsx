import { useRouter } from 'next/router';
import nfts from '../../../data/nfts.json';
import ProductContainer from '../../../src/components/product/ProductContainer';
import Header from '../../../src/components/header/Header';
import Footer from '../../../src/components/footer/Footer';

export default function Product() {
  
  const router = useRouter();
  const { id } = router.query;
  const product = nfts.find((nft) => nft.id === parseInt(id));

  return (
    <div>
      <Header />
      <ProductContainer {...product} />
      <Footer />
    </div>



  );
}