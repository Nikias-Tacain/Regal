import React from 'react'
import dynamic from 'next/dynamic';

const page = () => {
  const ComponenteProducts = dynamic(() => import('./components/ProductList'));
  return (
    <div>
      <ComponenteProducts />
    </div>
  )
}

export default page