import React from "react"
import { Grid, Paper } from "@mui/material"
import Introduce from "./sections/Intruduce"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Etc from "./sections/Etc"

const Resume: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#fff" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Introduce />
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Etc />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Resume
