// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductItem = styled.li`
  width: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

const ProductImage = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
`;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />
      <ProductList>
        {filteredProducts.map(product => (
          <ProductItem key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <ProductImage
                  src={product.thumbnail}
                  alt={product.title}
                  width={150}
                  height={150}
                />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </a>
            </Link>
          </ProductItem>
        ))}
      </ProductList>
    </main>
  );
}
