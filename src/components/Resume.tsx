import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import Introduce from './sections/Intruduce'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Etc from './sections/Etc'

export const CustomHr = ({ inner = false }) => (
  <Box
    sx={{
      width: '100%',
      ml: inner ? 0 : 2,
      my: 2,
      borderBottom: '1px solid #dee2e6'
    }}
  />
)

const Resume: React.FC = () => {
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
