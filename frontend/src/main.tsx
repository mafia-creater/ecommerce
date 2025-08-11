import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/sections/Navbar.tsx'
import Footer from './components/sections/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
       <div className="pt-24 md:pt-28">
        <App />
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
