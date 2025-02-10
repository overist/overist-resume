import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 2,
        py: 3,
        backgroundColor: '#f8f9fa'
      }}
    >
      <Typography variant="body1" align="center">
        Last updated 2025-02-10
      </Typography>
      <Typography variant="body1" align="center">
        copyright © overist
      </Typography>
    </Box>
  )
}

export default Footer
