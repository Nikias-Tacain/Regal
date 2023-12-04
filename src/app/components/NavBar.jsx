'use client'
import React from 'react'
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useCarrito } from '../tienda/[id]/components/CarritoContext';

function NavBar() {
  const { carrito } = useCarrito();
  return (
    <div className={styles.navBar}>
        <Link href={'/tienda/carrito'}>
          <Image src={'/imgCarrito.svg'} alt='' width={30} height={30}/>
          {carrito.length === 0 ? (<></>) : (<img src='/notificacionCarrito.svg' style={{ position: 'absolute' }} alt='Shopping Cart Notification'/>)}
        </Link>
        <Image src={'/imageFav.svg'} alt='' width={30} height={30}/>
        <Image src={'/imgProfile.svg'} alt='' width={30} height={30}/>
        <Image src={'/imgSearch.svg'} alt='' width={30} height={30}/>
    </div>
  )
}

export default NavBar