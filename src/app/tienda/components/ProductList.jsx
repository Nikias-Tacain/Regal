'use client'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import styles from './ProductList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = React.memo(({ item }) => (
  <div className={styles.cardProduct} key={item.id}>
    <section className={styles.cardProductDiv}>
      <div className={styles.imgSaleandFav}>
        <Image src={'/saleImage.svg'} alt='' width={70} height={50}/>
        <Image src={'/imageFav.svg'} alt='' width={30} height={50} className={styles.imgFav}/>
      </div>
      <div className={styles.divProductImg}>
        <Link href={`/tienda/${item.id}`}>
          <article className={styles.imgProduct}>
            <Image src={item.imagen[0]} alt={item.nombre} width={300} height={250} loading='lazy'/>
          </article>
        </Link>
      </div>
      <section className={styles.cardProductDivData}>
        <div>
          <Link href={`/tienda/${item.id}`}>
            <article>
              <h2>{item.nombre}</h2>
              <div>
                <span>S/{item.precioCaro} PEN</span>
                <p>S/{item.precio} PEN</p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </section>
  </div>
));
ProductCard.displayName = 'ProductCard'
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosRef = collection(db, "productos");
        const resp = await getDocs(productosRef);
        const productData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(productData);        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.card}>
      {products.map((product) => <ProductCard key={product.id} item={product} />)}
    </div>
  );
};

export default ProductList;
