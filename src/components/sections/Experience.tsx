import React from "react"
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material"
import { EXPERIENCE } from "../../payload"

const Experience: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <List>
        {EXPERIENCE.map((exp, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={exp.company}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {exp.role}
                  </Typography>
                  {` — ${exp.period}`}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Experience
