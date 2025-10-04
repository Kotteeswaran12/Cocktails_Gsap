import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroPage from './HeroSection/HeroPage'
import Menu from './MenuSection/Menu.jsx'
import NavBar from './Navigationbar/NavBar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HeroPage />
    <Menu />
  </StrictMode>,
)
