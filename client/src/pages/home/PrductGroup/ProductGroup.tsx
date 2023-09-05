import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  description: string,
  price: string,
  imgSrc: string,
  discount:string,
}

interface Menu {
  title: string;
  products: Product[];
}

const ProductGroup = () => {
  const [backendData, setBackendData] = useState<Menu>({ title: "", products: [] });

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBackendData(data.menu);
      });
  }, []);

  return (
    <div className='product_group' id='menu'>
      {typeof backendData === 'undefined' ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h1>{backendData.title}</h1>
          <div className="product_list">
            {backendData.products.map((product: Product, i) => (
              <Link to='/product' className='product_group_li' key={i} >
                <ProductItem product={product} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGroup;
