import React from "react"
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material"
import { ETC } from "../../payload"

const Etc: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Additional Information
      </Typography>
      {Object.entries(ETC).map(([category, items]) => (
        <Box key={category} mb={2}>
          <Typography variant="h6">{category}</Typography>
          <List dense>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  )
}

export default Etc
