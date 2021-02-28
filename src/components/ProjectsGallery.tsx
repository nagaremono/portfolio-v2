import { Grid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../projects';

export const ProjectsGallery: React.FC = () => {
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </Grid>
  );
};
