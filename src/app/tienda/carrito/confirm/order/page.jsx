import React from 'react'
import styles from './components/OrderPage.module.css'
import Image from 'next/image';
function Page() {
  let pedido =  Math.floor(Math.random() * 999) + 1; 
  return (
    <section className={styles.orderPage}>
      <div>
        <h2>¡Compra realizada correctamente!</h2>
        <p>Número de pedido: {pedido}CL</p>
      </div>
      <div>
        <Image src={'/pedidoEnviado.jpeg'} width={300} height={400}/>
      </div>
      <article>
        <button className={styles.buyButton}>Haz Seguimiento Aquí</button>
      </article>
    </section>
  )
}

export default Page