import React from "react"
import { Box, Typography, Chip, Grid } from "@mui/material"
import { SKILLS } from "../../payload"

const Skills: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      {Object.entries(SKILLS).map(([category, skills]) => (
        <Box key={category} mb={2}>
          <Typography variant="h6">{category}</Typography>
          <Grid container spacing={1}>
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip label={`${skill.name} (${skill.level})`} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  )
}

export default Skills
