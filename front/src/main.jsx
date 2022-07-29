import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router} from 'react-router-dom'
import { LoginContextProvider } from './context/loginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </Router>
)
