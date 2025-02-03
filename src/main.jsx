import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import { GlobalStyles } from './styles/GlobalStyes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
