import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AssemblyEndGame from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssemblyEndGame />
  </StrictMode>,
)
