import React from 'react'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link
} from '@mui/material'
import { ETC } from '../../payload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faLink } from '@fortawesome/free-solid-svg-icons'
import { CustomHr } from '../Resume'

const Etc: React.FC = () => {
  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h4">Education</Typography>
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
          <Typography variant="h5">{ETC.Education.content}</Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              color: 'secondary.main'
            }}
          >
            {ETC.Education.date}
          </Typography>
        </Box>
      </Box>

      <CustomHr inner />

      <Box mb={4}>
        <Typography variant="h4">Activities</Typography>
        {ETC.Externals.map((external, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #dee2e6'
            }}
            ml={2}
            py={2}
            px={2}
            mt={1}
            mb={2}
          >
            <Typography variant="h5">{external.title}</Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                color: 'secondary.main'
              }}
            >
              {external.date}
            </Typography>
            <Typography variant="body1">{external.content}</Typography>
          </Box>
        ))}
      </Box>

      <CustomHr inner />

      {ETC.Presentations.length > 0 && (
        <Box mb={4}>
          <Typography variant="h4">Presentations</Typography>
          {ETC.Presentations.map((presentation, index) => (
            <Box
              sx={{
                border: '1px solid #dee2e6'
              }}
              key={index}
              ml={2}
              py={2}
              px={2}
              mt={1}
              mb={2}
            >
              <Typography variant="h5">{presentation.title}</Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 400, color: 'secondary.main' }}
              >
                {presentation.date}
              </Typography>

              <Box ml={2}>
                {presentation.contents.map((content, index) => (
                  <Typography key={index} variant="body1">
                    • {content}
                  </Typography>
                ))}
              </Box>

              <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
                <FontAwesomeIcon icon={faLink} /> &nbsp;
                <Link
                  key={index}
                  href={presentation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" width={'fit-content'}>
                    {presentation.link}
                  </Typography>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <CustomHr inner />

      {ETC.Articles.length > 0 && (
        <Box mb={4}>
          <Typography variant="h4">Articles</Typography>
          {ETC.Articles.map((article, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid #dee2e6'
              }}
              ml={2}
              py={2}
              px={2}
              mt={1}
              mb={2}
            >
              <Typography variant="h5">{article.title}</Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 400, color: 'secondary.main' }}
              >
                {article.date}
              </Typography>
              <Box display={'flex'} alignItems={'center'}>
                <FontAwesomeIcon icon={faLink} /> &nbsp;
                <Link
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" width={'fit-content'}>
                    {article.link}
                  </Typography>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <CustomHr inner />

      {ETC.Awards.length > 0 && (
        <Box>
          <Typography variant="h4" gutterBottom>
            Awards
          </Typography>
          {ETC.Awards.map((award, index) => (
            <Box
              sx={{
                border: '1px solid #dee2e6'
              }}
              ml={2}
              py={2}
              px={2}
              mt={1}
              mb={2}
              key={index}
            >
              <Typography variant="h5">{award.title}</Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 400, color: 'secondary.main' }}
              >
                {award.date}
              </Typography>
              <Box display={'flex'} alignItems={'center'}>
                <FontAwesomeIcon icon={faAward} /> &nbsp;
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: 'italic'
                  }}
                >
                  {award.agency}, {award.award}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Etc
