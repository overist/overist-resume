import React from 'react'
import { Box, Typography, Avatar, Link, Grid, Icon } from '@mui/material'
import { INTRODUCE } from '../../payload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Introduce: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        {/* <Grid item>
          <Avatar
            alt={INTRODUCE.name}
            src={INTRODUCE.profileImage}
            sx={{ width: 100, height: 100 }}
          />
        </Grid> */}
        <Grid item xs>
          <Typography variant="h3">{INTRODUCE.name}</Typography>
          <Typography variant="body1">{INTRODUCE.introduction}</Typography>
          <Box display={'flex'} gap={1} mt={0.5}>
            {INTRODUCE.socialLinks.map((link, index) => (
              <Box>
                <FontAwesomeIcon icon={link.icon} /> &nbsp;
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  mr={1}
                >
                  {link.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography variant="h4" gutterBottom mt={4}>
          Introduce
        </Typography>
        {INTRODUCE.tendencies.map((tendency, index) => (
          <Box key={index} mt={1} ml={2}>
            <Typography variant="h6">{tendency.title}</Typography>
            <Typography variant="body1">{tendency.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Introduce
