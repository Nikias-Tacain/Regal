'use client'
import React from 'react'
import styles from './components/pedidoConfirm.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useCarrito } from '../../[id]/components/CarritoContext';

export default function Page() {
    const { borrarLocalStorage } = useCarrito();
    const handleClickBorrarLocalStorage = () => {
        borrarLocalStorage();
      };
  return (
    <section className={styles.mainConfirmOrden}>
        <article className={styles.mainConfirmOrdenArticle}>
            <h2>¡Ya falta poco para finalizar tu compra!</h2>
        </article>
        <div className={styles.productIdRegreso}>
            <Link href={'/tienda/carrito'}>
                <div>
                    <Image src={'/flechaRegresoId.svg'} alt='' width={50} height={20}/>
                    <span>REGRESAR</span>
                </div>
            </Link>
        </div>
        <article className={styles.locationBar}>
            <div>
                <article>
                    <Image src={'/location.svg'} alt='' width={50} height={50}/>
                    <p>¿En dónde recibiras tu pedido?</p>
                </article>
                <div>
                    <p>Agregar dirección</p>
                </div>
            </div>
        </article>
        <article className={styles.CardMethod}>
            <div>
                <Image src={'/cardMetodoPago.svg'} alt='' width={30} height={30}/>
                <span>Método de pago</span>
            </div>
            <section>
                <div>
                    <Image src={'/visaCard.svg'} alt='' width={100} height={100}/>
                    <Image src={'/masterCard.svg'} alt='' width={100} height={100}/>
                    <Image src={'/yapeCard.svg'} alt='' width={100} height={100}/>
                </div>
                <div>
                    <Image src={'/lukitaCard.svg'} alt='' width={100} height={100}/>
                    <Image src={'/americanCard.svg'} alt='' width={100} height={100}/>
                    <Image src={'/dinersCard.svg'} alt='' width={100} height={100}/>
                </div>
            </section>
            <article>
                <Link href='/tienda/carrito/confirm/order'>
                    <button className={styles.buyButton} onClick={handleClickBorrarLocalStorage}>Finalizar<span>→</span></button>
                </Link>
            </article>
        </article>
    </section>
  )
}


  


