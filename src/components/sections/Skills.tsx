import React from 'react'
import { Box, Typography, Chip, Grid } from '@mui/material'
import { SKILLS } from '../../payload'

const CustomChip: React.FC<{ name: string; level: string }> = ({
  name,
  level
}) => (
  <div
    style={{
      padding: '0.25rem 0.5rem',
      // border: '1px solid #000',
      fontWeight: 900,
      fontSize: '0.8rem',
      backgroundColor: '#e9ecef'
    }}
  >
    {`${name}`}
    <span
      style={{
        fontWeight: 400,
        fontSize: '0.7rem'
      }}
    >{` (${level})`}</span>
  </div>
)

const Skills: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      {Object.entries(SKILLS).map(([category, skills]) => (
        <Box key={category} mb={1} ml={2}>
          <Typography variant="h6">{category}</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap'
            }}
          >
            {skills.map((skill, index) => (
              <Box key={index}>
                <CustomChip name={skill.name} level={skill.level} />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Skills
