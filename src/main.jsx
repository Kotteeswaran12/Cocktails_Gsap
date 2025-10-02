import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroPage from './HeroSection/HeroPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroPage />
  </StrictMode>,
)
