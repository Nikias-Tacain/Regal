'use client'
import { useCarrito } from './components/CarritoContext'
import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import styles from './components/ProductId.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '@/app/firebase/config'
import Swal from 'sweetalert2'

const Page = () => {
    const { handleButtonClick } = useCarrito();
    const [item,setItem] = useState(null);
    const id = useParams().id;
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const docRef = doc(db, 'productos', id);
            const resp = await getDoc(docRef);
            if (resp.exists()) {
              setItem({ ...resp.data(), id: resp.id });
            } else {
              console.error('Product not found.');
            }
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchProduct();
    }, [id]);
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    const isBrowser = typeof window !== 'undefined';

    const [favorito, setFavorito] = useState(() => {

      if (isBrowser) {

        const storedValue = localStorage.getItem(`favorito-${id}`);

        return storedValue ? JSON.parse(storedValue) : false;
      }
      return false; 
    });
  

    useEffect(() => {
      if (isBrowser) {
        localStorage.setItem(`favorito-${id}`, JSON.stringify(favorito));
      }
    }, [favorito,id, isBrowser]);

    const handleClick = () => {
        const nuevoEstado = !favorito;
        setFavorito(nuevoEstado);
        if (nuevoEstado) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });
              Toast.fire({
                icon: "success",
                title: "Agregado favorito con exito."
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
              Toast.fire({
                icon: "info",
                title: "Se elimino de favorito."
            });
        }
    };
    const imagenSrc = favorito ? '/heartRed.svg' : '/imageFav.svg';
  return (
    <section className={styles.productId}>
        <div className={styles.productIdRegreso}>
            <Link href={'/tienda'}>
                <div>
                    <Image src={'/flechaRegresoId.svg'} alt='' width={50} height={20}/>
                    <span>REGRESAR</span>
                </div>
            </Link>
        </div>
        <section className={styles.idProduct}>
            {item && (
                <section>
                    <h2>{item.nombre}</h2>
                    <div className={styles.idProductInfo}>
                        <span>S/{item.precioCaro} PEN</span>
                        <p>S/{item.precio} PEN</p>
                    </div>
                    <div>
                        <div className={styles.imagesProductId}>
                        <div className={styles.imgSaleandFav}>
              <Image src={'/saleImage.svg'} alt='' width={70} height={50}/>
              <Image src={imagenSrc} alt='' width={30} height={50} className={styles.imgFav} onClick={handleClick}/>
            </div>
                            {selectedImage ? (
                                <img src={selectedImage} alt={item?.nombre}  height={400} width={400}/>
                            ) : (
                                <Image src={item.imagen[0]} alt={item?.nombre} height={400} width={400} priority/>
                            )}
                            <div>
                                {item?.imagen.map((imagen, index) => (
                                    <img
                                        key={index}
                                        src={imagen}
                                        alt={`Image-${index}`}
                                        style={{ width: '70px', height: '70px', margin: '10px', cursor: 'pointer' }}
                                        onClick={() => handleImageClick(imagen)}
                                        loading='lazy'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoProductId}>
                        <span>Dimension: {item?.dimension}</span>
                        <span>Grosor: {item?.grosor}</span>
                        <span>Peso: {item?.peso}</span>
                        <div className={styles.valoracionStars}>
                            <Image src={'/estrellaPrendida.svg'} alt='' width={25} height={25}/>
                            <Image src={'/estrellaPrendida.svg'} alt='' width={25} height={25}/>
                            <Image src={'/estrellaPrendida.svg'} alt='' width={25} height={25}/>
                            <Image src={'/estrellaApagada.svg'} alt='' width={25} height={25}/>
                            <Image src={'/estrellaApagada.svg'} alt='' width={25} height={25}/>
                            <div>
                                <span>Dar valoracion</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.buttonAgregarCarrito} onClick={() => handleButtonClick(item)}>Agregar al carrito</button>
                </section>
            )}
        </section>
    </section>
  )
}

export default Page