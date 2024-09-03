import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Provider/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
    <Toaster position="top-right" />
  </CartProvider>,
)
