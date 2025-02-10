import React from 'react'
import Resume from './components/Resume'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './styles/index.css'

import { Box, ThemeProvider } from '@mui/material'
import { globalTheme } from './styles/globalTheme'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Box maxWidth="1080px" margin="auto" px={4} pt={4}>
        <Resume />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
