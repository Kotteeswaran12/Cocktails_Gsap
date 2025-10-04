import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroPage from './HeroSection/HeroPage'
import Menu from './MenuSection/Menu.jsx'
import NavBar from './Navigationbar/NavBar.jsx';
import Review from './ReviewSection/Review.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HeroPage />
    <Menu />
    <Review />
  </StrictMode>,
)
