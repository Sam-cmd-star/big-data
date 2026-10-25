import './index.css' // <--- ¡Esto es lo que inyecta todos los estilos de Tailwind!
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BigDataModulePage } from '../BigDataModulePage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<BigDataModulePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)