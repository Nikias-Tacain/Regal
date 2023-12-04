'use client'
import React from 'react'
import styles from './components/CarritoCompras.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCarrito } from '../[id]/components/CarritoContext'


function Page(){
  const { carrito, clearCarrito, eliminarProductoDelCarrito, aumentarCantidad, disminuirCantidad } = useCarrito();
  let subTotalPrecio = carrito.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.cantidad);
  }, 0);
  let envio = 10;
  let totalPrecio = subTotalPrecio + envio;
  return (
    <section className={styles.carritoCompras}>
        <div className={styles.carritoComprasHeader}>
            <p>CARRITO DE COMPRAS</p>
        </div>
        <div>
        {carrito.length === 0 ? (
          <div className={styles.carritoVacio}>
            <div>
              <h3>Tu carrito de compras está vacío </h3>
              <Link href={'/tienda'}>
                <button>ir a tienda →</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <div className={styles.carritoInt}>
              {carrito.map((student) =>(
                <div key={student.id} className={styles.carritoIntProduct}>
                  <img src={student.imagen[0]} alt={student.nombre} />
                  <div className={styles.carritoIntSection}>
                    <h2>{student.nombre}</h2>
                    <div className={styles.sectionControlls}>
                      <span onClick={() => disminuirCantidad(student)}>-</span>
                      <p>{student.cantidad}</p>
                      <span onClick={() => aumentarCantidad(student)}>+</span>
                    </div>
                    <p>S/{student.precio}.00</p>
                  </div>
                  <div className={styles.contentButtons}>
                    <span onClick={() => eliminarProductoDelCarrito(student)}><FontAwesomeIcon icon={faTrashCan} /></span>
                  </div>
                </div>
              ))}
              <div className={styles.carritoIntTotal}>
                <div>
                  <h3>TOTAL</h3>
                </div>
                <section className={styles.carritoIntTotalArticle}>
                  <article>
                    <div>
                      <p>Subtotal</p>
                      <p>Envío</p>
                      <p>Total</p>
                    </div>
                  </article>
                  <div className={styles.infoProductsTotal}>
                    <span>S/.{subTotalPrecio}.00</span>
                    <span>S/.{envio}.00</span>
                    <span>S/.{totalPrecio}.00</span>
                  </div>

                </section>

              </div>
              </div>
            <div className={styles.buttons}>
              <button className={styles.buttonBorrarCarrito} onClick={clearCarrito}><FontAwesomeIcon icon={faTrashCan} /></button>
              <Link href='/tienda/carrito/confirm'>
                <button className={styles.buyButton}>Siguiente<span>→</span></button>
              </Link>
            </div>
          </div>
        </div>
        )}
    </div>
    </section>
  )
}

export default Page;