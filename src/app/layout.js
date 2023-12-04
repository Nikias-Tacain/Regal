import Header from './components/Header'
import NavBar from './components/NavBar'
import './globals.css'
import { CarritoProvider } from './tienda/[id]/components/CarritoContext'

export const metadata = {
  title: 'Regal',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          <Header/>
          {children}
          <NavBar/>
        </CarritoProvider>
      </body>

    </html>
  )
}
