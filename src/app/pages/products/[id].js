// pages/products/[id].js
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';

const ProductDetail = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.thumbnail} alt={product.title} width={300} height={300} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await axios.get('https://dummyjson.com/products');
  const paths = response.data.products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`https://dummyjson.com/products/${params.id}`);
  return { props: { product: response.data } };
}

export default ProductDetail;
