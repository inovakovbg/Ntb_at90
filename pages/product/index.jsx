import { useRouter } from 'next/router';
import nfts from '../../../nfts.json';
import ProductContainer from '../../../components/ProductContainer';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const productId = parseInt(id);
  const product = nfts.find((nft) => nft.id === productId);

 

  return <p>Post: {id}</p>;
}