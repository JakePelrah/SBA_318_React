import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GameProvider from './components/GameProvider.jsx'


createRoot(document.getElementById('root')).render(
  <GameProvider>
    <App />
  </GameProvider>
)
