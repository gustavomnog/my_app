import React from 'react'
import ReactDOM from 'react-dom/client'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import {AuthProvider} from './state/auth'

import App from './App'
import './index.css'


import { blue, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: grey[600],
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </>
)


