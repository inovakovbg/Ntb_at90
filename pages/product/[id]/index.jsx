import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import nfts from '../../../data/nfts.json';
import ProductContainer from '../../../src/components/product/ProductContainer';
import Header from '../../../src/components/header/Header';
import Footer from '../../../src/components/footer/Footer';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch(process.env.apiUrl + `/nfts/${id}`);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const data = await result.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching NFT data:', error);
    }
  }, [id]);



  // useEffect(() => {
  //   const foundProduct = nfts.find((nft) => nft.id === parseInt(id));
  //   setProduct(foundProduct);
  // }, [nfts, id]);

  return (
    <div>
      <Header />
      {product ? (
        <ProductContainer {...product} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
}