import React from 'react'
import { Box, Typography, Card, CardContent, Link } from '@mui/material'
import { PROJECTS } from '../../payload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projects: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      {PROJECTS.map((project, index) => (
        <Box
          sx={{
            border: '1px solid #dee2e6'
          }}
          ml={2}
          py={2}
          px={2}
          mt={1}
          mb={2}
        >
          <Typography variant="h5">{`${project.title}`}</Typography>
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic'
            }}
          >{`${project.summary}`}</Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              color: 'secondary.main'
            }}
            gutterBottom
          >{`${project.info}`}</Typography>
          <Box display={'flex'}>
            {project.links.map((link, index) => (
              <Box
                mr={1}
                display={'flex'}
                alignItems={'center'}
                flexWrap={'wrap'}
              >
                <FontAwesomeIcon icon={faLink} /> &nbsp;
                {link.link ? (
                  <Link
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      variant="body1"
                      width={'fit-content'}
                      sx={{
                        textDecoration: link.deprecated
                          ? 'line-through'
                          : 'unset'
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                ) : (
                  <Typography variant="body1" width={'fit-content'}>
                    {link.title}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          {project.contents.map((content, index) => (
            <Typography variant="body1" key={index} ml={2}>
              {`• ${content}`}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Projects
