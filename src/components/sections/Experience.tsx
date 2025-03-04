import React from 'react'
import { Box, Typography, Paper, Chip } from '@mui/material'
import { EXPERIENCE } from '../../payload'

const Experience: React.FC = () => {
  const CustomChip: React.FC<{ label: string }> = ({ label }) => (
    <div
      style={{
        padding: '0.25rem 0.5rem',
        // border: '1px solid #000',
        // fontWeight: 900,
        fontSize: '0.8rem',
        backgroundColor: '#e9ecef'
      }}
    >
      {`${label}`}
    </div>
  )

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Work Experience
      </Typography>
      {EXPERIENCE.map((exp, index) => (
        <Box
          sx={{
            border: '1px solid #dee2e6'
          }}
          key={index}
          ml={2}
          py={2}
          px={2}
          my={2}
        >
          <Typography variant="h5">{`${exp.company}`}</Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              color: 'secondary.main'
            }}
          >
            {`${exp.role} | ${exp.period}`}
          </Typography>

          <Box ml={2}>
            {exp.contents.map((content, index) => (
              <Box key={index} mb={1}>
                {content.type && (
                  <Typography
                    variant="body1"
                    key={index}
                    width={'fit-content'}
                    fontWeight={'bold'}
                  >
                    [{content.type}]
                  </Typography>
                )}
                {content.texts.map((text) => (
                  <Typography variant="body1" key={index} width={'fit-content'}>
                    • {text}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>

          <Box mt={1}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box display={'flex'} gap={1}>
              {exp.skill.map((skill, index) => (
                <CustomChip label={skill} />
                // <Box key={index} display={'inline-block'} mr={0.5}>
                //   {skill}
                // </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Experience
