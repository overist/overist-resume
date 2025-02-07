import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import Introduce from './sections/Intruduce'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Etc from './sections/Etc'

const Resume: React.FC = () => {
  const CustomHr = () => (
    <Box
      sx={{ width: '100%', ml: 2, my: 2, borderBottom: '1px solid #dee2e6' }}
    />
  )

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Introduce />
        </Grid>
        <CustomHr />
        <Grid item xs={12}>
          <Skills />
        </Grid>
        <CustomHr />
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <CustomHr />
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <CustomHr />
        <Grid item xs={12}>
          <Etc />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Resume
