
import { createRoot } from 'react-dom/client'
import AppProvider from './app/Provider.jsx'
import App from './app/App.jsx'
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App/>
  </AppProvider>
)
