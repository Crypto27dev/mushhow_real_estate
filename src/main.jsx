import { ChakraProvider } from '@chakra-ui/react'  

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import HouseProvider from './context/HouseContext'

import './styles/index.css'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>   
      <HouseProvider>
        <App />             
      </HouseProvider>    
    </ChakraProvider>
  </React.StrictMode>
)
