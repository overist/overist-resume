import React from "react"
import { Box, Typography, Avatar, Link, Grid } from "@mui/material"
import { INTRODUCE } from "../../payload"

const Introduce: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar
            alt={INTRODUCE.name}
            src={INTRODUCE.profileImage}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h4">{INTRODUCE.name}</Typography>
          <Typography variant="body1">{INTRODUCE.introduction}</Typography>
          <Box mt={1}>
            {INTRODUCE.socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                mr={1}
              >
                {link.name}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Introduce
