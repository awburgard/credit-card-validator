import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fragment>
      <CssBaseline />
      <App />
    </Fragment>
  </StrictMode>
)