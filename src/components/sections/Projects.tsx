import React from "react"
import { Box, Typography, Card, CardContent, Link } from "@mui/material"
import { PROJECTS } from "../../payload"

const Projects: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Projects
      </Typography>
      {PROJECTS.map((project, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{project.name}</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {project.description}
            </Typography>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Link
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Projects
