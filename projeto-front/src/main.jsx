import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Footer/Header/Header.jsx'
import Principal from './components/Principal/Principal.jsx'
import Footer from './components/Footer/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Principal />
    <Footer />
  </StrictMode>,
)
