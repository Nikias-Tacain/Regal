import dynamic from 'next/dynamic';
import './globals.css'
import { CarritoProvider } from './tienda/[id]/components/CarritoContext'
export const metadata = {
  title: 'Regal',
  description: '',
}

export default function RootLayout({ children }) {
  const ComponenteHeader = dynamic(() => import('./components/Header'));
  const ComponenteNavBar = dynamic(() => import('./components/NavBar'));
  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          <ComponenteHeader/>
          {children}
          <ComponenteNavBar/>
        </CarritoProvider>
      </body>

    </html>
  )
}
