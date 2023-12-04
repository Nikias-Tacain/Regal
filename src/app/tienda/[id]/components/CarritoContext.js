'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {

  const isBrowser = typeof window !== 'undefined';
  
  const [carrito, setCarrito] = useState(() => {
    if (isBrowser) {
      const storedCarrito = localStorage.getItem('carrito');
      return storedCarrito ? JSON.parse(storedCarrito) : [];
    }
    return [];
  });

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }, [carrito, isBrowser]);
  const borrarLocalStorage = () => {
    if (isBrowser) {
      localStorage.removeItem('carrito');
    }
  };
  const handleButtonClick = (product) => {
    const existingProductIndex = carrito.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCarrito = [...carrito];
      updatedCarrito[existingProductIndex].cantidad += 1;
      setCarrito(updatedCarrito);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'info',
        title: 'El producto se encuentra agregado. Se suma su cantidad.',
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito.',
      });
      setCarrito([
        ...carrito,
        {
          id: product.id,
          imagen: product.imagen,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: 1,
        },
      ]);
    }
  };

  const clearCarrito = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Se borrara todo el carrito !!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar !',
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]); // Establecer el carrito como un array vacío
        Swal.fire('Borrado', 'El carrito se borró completamente', 'success');
      }
    });
  };

  const eliminarProductoDelCarrito = (productoAEliminar) => {
    const carritoActualizado = carrito.filter(
      (producto) => !(producto.id === productoAEliminar.id)
    );
    setCarrito(carritoActualizado);
  };

  const aumentarCantidad = (productoAAumentar) => {
    const carritoActualizado = carrito.map((producto) => {
      if (producto.id === productoAAumentar.id) {
        producto.cantidad += 1;
      }
      return producto;
    });
    setCarrito(carritoActualizado);
  };

  const disminuirCantidad = (productoADisminuir) => {
    const carritoActualizado = carrito.map((producto) => {
      if (producto.id === productoADisminuir.id) {
        producto.cantidad = Math.max(1, producto.cantidad - 1);
      }
      return producto;
    });
    setCarrito(carritoActualizado);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        handleButtonClick,
        clearCarrito,
        eliminarProductoDelCarrito,
        disminuirCantidad,
        aumentarCantidad,
        borrarLocalStorage,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
